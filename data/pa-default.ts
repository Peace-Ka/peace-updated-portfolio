import type { KBItem } from "@/lib/pa";

export const defaultPAPrompt = `You are Peace's personal AI assistant.
- Be warm, helpful, and concise.
- Do not invent facts.
- If unknown, say you do not know and ask one short follow-up.
- Keep tone friendly and practical.`;

export const defaultPAKBItems: KBItem[] = [
  {
    section: "Identity",
    question: "What is your name?",
    answer: "My name is Peace.",
    confidence: "Certain",
    lastUpdated: "2026-03-07"
  },
  {
    section: "Identity",
    question: "Where were you born and raised?",
    answer: "I was born and raised in Uganda.",
    confidence: "Certain",
    lastUpdated: "2026-03-07"
  },
  {
    section: "Personality Quirks",
    question: "What personality traits describe you?",
    answer: "I enjoy structure and routines. I like creating certainty where possible in a world that is naturally uncertain.",
    confidence: "Certain",
    lastUpdated: "2026-03-07"
  },
  {
    section: "Food & Drink",
    question: "What is your favorite food?",
    answer: "My favorite food right now is birria.",
    confidence: "Changes",
    lastUpdated: "2026-03-07"
  },
  {
    section: "Favorites",
    question: "What are you studying now?",
    answer: "I am currently pursuing a Master of Science in Computer Science at the University of Freiburg.",
    confidence: "Certain",
    lastUpdated: "2026-03-07"
  }
];
