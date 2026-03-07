import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { defaultPAKBItems, defaultPAPrompt } from "@/data/pa-default";
import { buildKnowledgeSnippet, flattenKB, retrieveRelevant } from "@/lib/pa";

export const runtime = "nodejs";

type Payload = {
  message?: string;
  locale?: string;
};

async function loadKnowledge() {
  try {
    const root = process.cwd();
    const [promptRaw, kbRaw] = await Promise.all([
      readFile(join(root, "peace_personality_prompt.txt"), "utf-8"),
      readFile(join(root, "peace_personal_kb.json"), "utf-8")
    ]);

    return {
      promptRaw,
      kbItems: flattenKB(kbRaw),
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
  return `${top.answer}\n\n(Source: ${top.section} - "${top.question}")`;
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

    const { promptRaw, kbItems, source } = await loadKnowledge();
    const relevant = retrieveRelevant(kbItems, message, 6);
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
- If context is insufficient, say you do not know and ask one short follow-up.
- Keep answers concise.
- Respond in ${locale === "de" ? "German" : "English"} unless user asks otherwise.`;

    const model = process.env.OPENAI_MODEL ?? "gpt-4.1-mini";

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        input: [
          { role: "system", content: [{ type: "input_text", text: systemPrompt }] },
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: `User question:\n${message}\n\nKnowledge context:\n${context}`
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
