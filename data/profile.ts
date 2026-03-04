export type LocalizedText = {
  en: string;
  de: string;
};

type ProfileData = {
  name: string;
  heroMeta: LocalizedText;
  heroMicroline: LocalizedText;
  heroHook: LocalizedText;
  aboutParagraphs: LocalizedText[];
  aboutStrengths: LocalizedText[];
  aboutClosing: LocalizedText;
  nowItems: LocalizedText[];
  contact: {
    email: string;
    location: LocalizedText;
    phoneNumbers: string[];
    linkedin?: string;
    github?: string;
  };
};

export const profile: ProfileData = {
  name: "Peace Kalamya",
  heroMeta: {
    en: "B.S. Computer Science (University of Oklahoma, 2025) - UWC RBC alum (Freiburg)",
    de: "B.Sc. Informatik (University of Oklahoma, 2025) - UWC-RBC-Alumna (Freiburg)"
  },
  heroMicroline: {
    en: "Nice to meet you - I like clarity, community, and code that lasts.",
    de: "Schön, dass du da bist - ich mag Klarheit, Gemeinschaft und Code, der hält."
  },
  heroHook: {
    en: "I build thoughtful systems for real-world problems, with a soft spot for clarity and practical impact.",
    de: "Ich entwickle durchdachte Systeme für echte Probleme, mit Fokus auf Klarheit und praktischen Nutzen."
  },
  aboutParagraphs: [
    {
      en: "I'm Peace (25), born and raised in Uganda. At 16, a scholarship took me to UWC Robert Bosch College in Freiburg - my first deep dive into living, learning, and building community across cultures.",
      de: "Ich bin Peace (25), in Uganda geboren und aufgewachsen. Mit 16 hat mich ein Stipendium ans UWC Robert Bosch College nach Freiburg gebracht - mein Einstieg in Lernen und Zusammenarbeit über Kulturen hinweg."
    },
    {
      en: "That experience shaped how I work: I'm comfortable in diverse teams, I communicate clearly, and I like turning messy real-world needs into structured systems. I later earned my B.S. in Computer Science at the University of Oklahoma, and I'm now pursuing an M.S. in Computer Science at the University of Freiburg.",
      de: "Diese Zeit prägt meine Arbeitsweise bis heute: Ich arbeite gerne in diversen Teams, kommuniziere klar und übersetze reale Anforderungen in strukturierte Systeme. Nach meinem B.Sc. in Informatik an der University of Oklahoma studiere ich jetzt M.Sc. Informatik an der Universität Freiburg."
    }
  ],
  aboutStrengths: [
    {
      en: "Cross-cultural collaboration: I adapt quickly, listen well, and work smoothly with different stakeholders.",
      de: "Interkulturelle Zusammenarbeit: schnelle Anpassung, gutes Zuhören, saubere Abstimmung mit Stakeholdern."
    },
    {
      en: "Clear communication: I translate technical detail into decisions people can act on.",
      de: "Klare Kommunikation: technische Details so erklären, dass Entscheidungen leichter fallen."
    },
    {
      en: "Systems mindset: I design for reliability, maintainability, and real constraints (cost, speed, users).",
      de: "Systemdenken: Fokus auf Zuverlässigkeit, Wartbarkeit und echte Constraints (Kosten, Tempo, Nutzer)."
    },
    {
      en: "Hands-on engineering: I build and deploy full-stack systems - from APIs and databases to UI and production debugging.",
      de: "Praxisnahes Engineering: Full-Stack von API/Datenbank bis UI und Debugging in Produktion."
    },
    {
      en: "Grounded AI work: I care about trustworthy outputs (e.g., document-grounded chatbots and retrieval workflows).",
      de: "Vertrauenswürdige KI: Interesse an robusten, dokumentenbasierten Ansätzen (z.B. RAG)."
    }
  ],
  aboutClosing: {
    en: "I'm especially excited about projects at the intersection of practical ML, software systems, and human-centered tooling.",
    de: "Besonders spannend finde ich Projekte zwischen praxisnahem ML, Software-Systemen und menschenzentrierten Tools."
  },
  nowItems: [
    {
      en: "Preparing for MSc CS in Freiburg.",
      de: "Vorbereitung auf den MSc Informatik in Freiburg."
    },
    {
      en: "Sharpening systems and ML workflows.",
      de: "Vertiefung von Systemen und ML-Workflows."
    },
    {
      en: "Building portfolio projects with clean UX.",
      de: "Portfolio-Projekte mit klarer UX bauen."
    }
  ],
  contact: {
    email: "Nabwonya.p.kalamya-1@ou.edu",
    location: {
      en: "Seeta, Mukono, Uganda",
      de: "Seeta, Mukono, Uganda"
    },
    phoneNumbers: ["+1 405-274-3184", "+256 789292000"],
    linkedin: undefined,
    github: "https://github.com/Peace-Ka"
  }
};
