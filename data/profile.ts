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
      en: "I grew up in Seeta, Mukono (Uganda), then moved to Freiburg for UWC Robert Bosch College and completed the IB in 2020.",
      de: "Ich bin in Seeta, Mukono (Uganda) aufgewachsen, ging dann nach Freiburg ans UWC Robert Bosch College und schloss dort 2020 das IB ab."
    },
    {
      en: "I completed my B.S. in Computer Science at the University of Oklahoma in 2025 and am now preparing for the MSc in Computer Science at the University of Freiburg.",
      de: "2025 habe ich meinen B.Sc. in Informatik an der University of Oklahoma abgeschlossen und bereite mich nun auf den MSc Informatik an der Universität Freiburg vor."
    }
  ],
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
    github: undefined
  }
};
