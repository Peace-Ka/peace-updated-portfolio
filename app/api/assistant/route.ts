import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { defaultPAKBItems, defaultPAPrompt } from "@/data/pa-default";
import { buildKnowledgeSnippet, flattenKB, retrieveRelevant } from "@/lib/pa";

export const runtime = "nodejs";

type ChatTurn = {
  role?: "user" | "assistant";
  text?: string;
};

type Payload = {
  message?: string;
  locale?: string;
  history?: ChatTurn[];
};

async function loadKnowledge() {
  try {
    const root = process.cwd();
    const promptRaw = await readFile(join(root, "peace_personality_prompt.txt"), "utf-8");

    const kbFiles = ["peace_personal_kb.json", "peace_profile_questions_1_to_10.json"];
    const kbReads = await Promise.allSettled(kbFiles.map((file) => readFile(join(root, file), "utf-8")));

    const kbRaws = kbReads
      .filter((result): result is PromiseFulfilledResult<string> => result.status === "fulfilled")
      .map((result) => result.value);

    if (!kbRaws.length) {
      throw new Error("No KB files available");
    }

    const combined = kbRaws.flatMap((raw) => flattenKB(raw));
    const deduped = Array.from(
      new Map(combined.map((item) => [`${item.question}::${item.answer}`, item])).values()
    );

    return {
      promptRaw,
      kbItems: deduped.length ? deduped : defaultPAKBItems,
      source: "files" as const
    };
  } catch {
    return {
      promptRaw: defaultPAPrompt,
      kbItems: defaultPAKBItems,
      source: "embedded_fallback" as const
    };
  }
}

function localFallbackAnswer(query: string, knowledge: ReturnType<typeof retrieveRelevant>) {
  if (!knowledge.length) {
    return `I do not have that in my personal notes yet. Could you ask that another way?`;
  }

  const top = knowledge[0];
  const normalized = top.answer
    .replace(/\bI am\b/g, "Peace is")
    .replace(/\bI'm\b/g, "Peace is")
    .replace(/\bI was\b/g, "Peace was")
    .replace(/\bI have\b/g, "Peace has")
    .replace(/\bI\b/g, "Peace")
    .replace(/\bMy\b/g, "Peace's")
    .replace(/\bmy\b/g, "Peace's");

  return `${normalized}\n\n(Source: ${top.section} - "${top.question}")`;
}

function extractResponseText(payload: any): string {
  if (payload?.output_text && typeof payload.output_text === "string") {
    return payload.output_text;
  }

  const output = payload?.output;
  if (Array.isArray(output)) {
    const chunks: string[] = [];
    for (const item of output) {
      for (const content of item?.content ?? []) {
        if (typeof content?.text === "string") {
          chunks.push(content.text);
        }
      }
    }
    if (chunks.length) {
      return chunks.join("\n").trim();
    }
  }

  return "I could not generate a response right now.";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    const message = body.message?.trim();
    const locale = body.locale === "de" ? "de" : "en";

    if (!message) {
      return NextResponse.json({ error: "Missing message." }, { status: 400 });
    }

    const safeHistory = (body.history ?? [])
      .filter((turn) => (turn.role === "user" || turn.role === "assistant") && typeof turn.text === "string")
      .map((turn) => ({ role: turn.role as "user" | "assistant", text: turn.text!.trim().slice(0, 1500) }))
      .filter((turn) => turn.text.length > 0)
      .slice(-12);

    const { promptRaw, kbItems, source } = await loadKnowledge();
    const relevant = retrieveRelevant(kbItems, message, 8);
    const context = buildKnowledgeSnippet(relevant);
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        answer: localFallbackAnswer(message, relevant),
        mode: source === "files" ? "fallback" : "fallback_embedded"
      });
    }

    const systemPrompt = `${promptRaw}

HARD GUARDRAILS
- Answer only using the supplied knowledge context.
- Use conversation history for continuity. If user says "yes", "sure", "okay", or similar, treat it as a reply to your previous question and continue naturally.
- Prefer direct helpful answers over meta statements.
- Avoid phrases like "the information provided does not specify".
- If exact detail is missing, give the best grounded summary from nearby facts and state uncertainty briefly.
- Keep answers concise (2-5 sentences unless user asks for more).
- Respond in ${locale === "de" ? "German" : "English"} unless user asks otherwise.
- Treat the user as a visitor asking about Peace, not as Peace.
- Use third-person perspective about Peace (for example: "Peace is..."), unless the user explicitly says they are Peace.
- Do not use pet names like "luv" or "hun" in this public portfolio assistant.
- Keep tone warm, natural, and clear (not robotic, not pedantic).

KNOWLEDGE CONTEXT
${context}`;

    const model = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";

    const historyInput = safeHistory.map((turn) => ({
      role: turn.role,
      content: [{ type: "input_text", text: turn.text }]
    }));

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.6,
        input: [
          { role: "system", content: [{ type: "input_text", text: systemPrompt }] },
          ...historyInput,
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: message
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { error: "OpenAI request failed.", detail, mode: "openai_error" },
        { status: 502 }
      );
    }

    const payload = await response.json();
    const answer = extractResponseText(payload);

    return NextResponse.json({ answer, mode: "openai" });
  } catch (error) {
    return NextResponse.json(
      { error: "Assistant API failed.", detail: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
