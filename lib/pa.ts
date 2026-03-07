export type KBItem = {
  section: string;
  question: string;
  answer: string;
  confidence: string;
  lastUpdated: string;
};

type PersonalKB = {
  sections?: {
    name?: string;
    items?: {
      question?: string;
      answer?: unknown;
      confidence?: string;
      last_updated?: string;
    }[];
  }[];
  entries?: {
    question?: string;
    answer?: unknown;
    confidence?: string;
    last_updated?: string;
  }[];
};

function stringifyAnswer(answer: unknown): string {
  if (typeof answer === "string") {
    return answer;
  }

  if (Array.isArray(answer)) {
    return answer
      .map((item) => (typeof item === "string" ? `- ${item}` : `- ${JSON.stringify(item)}`))
      .join("\n");
  }

  if (answer && typeof answer === "object") {
    return Object.entries(answer)
      .map(([key, value]) => `${key}: ${typeof value === "string" ? value : JSON.stringify(value)}`)
      .join("\n");
  }

  return "";
}

export function flattenKB(raw: string): KBItem[] {
  const parsed = JSON.parse(raw) as PersonalKB;
  const out: KBItem[] = [];

  for (const section of parsed.sections ?? []) {
    for (const item of section.items ?? []) {
      if (!item.question) {
        continue;
      }

      const normalizedAnswer = stringifyAnswer(item.answer);
      if (!normalizedAnswer) {
        continue;
      }

      out.push({
        section: section.name ?? "General",
        question: item.question,
        answer: normalizedAnswer,
        confidence: item.confidence ?? "Unknown",
        lastUpdated: item.last_updated ?? ""
      });
    }
  }

  for (const entry of parsed.entries ?? []) {
    if (!entry.question) {
      continue;
    }

    const normalizedAnswer = stringifyAnswer(entry.answer);
    if (!normalizedAnswer) {
      continue;
    }

    out.push({
      section: "General",
      question: entry.question,
      answer: normalizedAnswer,
      confidence: entry.confidence ?? "Unknown",
      lastUpdated: entry.last_updated ?? ""
    });
  }

  return out;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

export function retrieveRelevant(items: KBItem[], query: string, topK = 6): KBItem[] {
  const qTokens = new Set(tokenize(query));

  const scored = items.map((item) => {
    const q = tokenize(item.question);
    const a = tokenize(item.answer);
    const qaTokens = [...q, ...a];
    let overlap = 0;
    for (const token of qaTokens) {
      if (qTokens.has(token)) {
        overlap += 1;
      }
    }

    const bonus =
      item.question.toLowerCase().includes(query.toLowerCase()) ||
      query.toLowerCase().includes(item.question.toLowerCase())
        ? 2
        : 0;

    return {
      item,
      score: overlap + bonus
    };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((entry) => entry.item);
}

export function buildKnowledgeSnippet(items: KBItem[]): string {
  return items
    .map(
      (item) =>
        `[${item.section}] Q: ${item.question}\nA: ${item.answer}\nConfidence: ${item.confidence}; Last updated: ${item.lastUpdated}`
    )
    .join("\n\n");
}
