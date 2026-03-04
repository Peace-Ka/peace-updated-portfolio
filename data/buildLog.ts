export type BuildLogEntry = {
  dateISO: string;
  title: {
    en: string;
    de: string;
  };
  summary: {
    en: string;
    de: string;
  };
  tags?: string[];
  links?: {
    label: {
      en: string;
      de: string;
    };
    href: string;
  }[];
};

export const buildLogEntries: BuildLogEntry[] = [
  {
    dateISO: "2026-03-04",
    title: {
      en: "Build log de-emphasized on homepage",
      de: "Build-Log auf der Startseite zurückgenommen"
    },
    summary: {
      en: "Moved Build Log below Contact, removed the top-nav link, and reduced the default view to two compact entries so projects and profile stay front and center.",
      de: "Build-Log unter den Kontaktbereich verschoben, den Top-Navi-Link entfernt und die Standardansicht auf zwei kompakte Einträge reduziert, damit Profil und Projekte im Fokus bleiben."
    },
    tags: ["UX", "Homepage hierarchy", "Build log"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Math minor added to academic profile",
      de: "Nebenfach Mathematik im Profil ergänzt"
    },
    summary: {
      en: "Updated hero, About copy, and skills chips to include the Mathematics minor for clearer academic positioning.",
      de: "Hero, Über-mich-Text und Skill-Chips um das Nebenfach Mathematik ergänzt, für eine klarere akademische Positionierung."
    },
    tags: ["About", "Skills", "Academic profile"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Hero microcopy refined",
      de: "Hero-Microcopy angepasst"
    },
    summary: {
      en: "Updated the hero badge text from location-specific phrasing to 'Global perspective' for a broader and more professional framing.",
      de: "Den Hero-Badge-Text von standortbezogener Formulierung auf 'Global perspective' geändert, für eine breitere und professionellere Positionierung."
    },
    tags: ["Copy", "Hero", "Branding"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Resume download file updated and degree wording refined",
      de: "Lebenslauf-Datei aktualisiert und Studienstatus präzisiert"
    },
    summary: {
      en: "Updated hero wording from 'Incoming MSc' to 'MS in progress' and connected the latest resume PDF to the portfolio download actions.",
      de: "Die Hero-Formulierung von 'Incoming MSc' auf 'MS in progress' angepasst und den aktuellen Lebenslauf als Download-Datei eingebunden."
    },
    tags: ["Content", "CV", "Hero", "EN/DE"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "About section expanded for academic and hiring readability",
      de: "Über-mich-Bereich für akademische und berufliche Lesbarkeit erweitert"
    },
    summary: {
      en: "Expanded About into two concise narrative paragraphs plus a compact 'What I bring' list, and linked the public GitHub profile in contact data.",
      de: "Den Über-mich-Bereich auf zwei prägnante Absätze plus eine kompakte 'Was ich mitbringe'-Liste erweitert und das öffentliche GitHub-Profil in den Kontaktdaten ergänzt."
    },
    tags: ["About", "Content", "EN/DE", "GitHub"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Theme refined for professional readability",
      de: "Theme für professionelle Lesbarkeit überarbeitet"
    },
    summary: {
      en: "Shifted the portfolio from pink/brown styling to a cleaner navy/slate palette with restrained teal accents for a more employer-friendly presentation.",
      de: "Das Portfolio von Pink/Braun auf eine sachlichere Navy/Slate-Palette mit dezenten Teal-Akzenten umgestellt, für einen arbeitgeberfreundlicheren Auftritt."
    },
    tags: ["Design", "Theme", "UI polish"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Portfolio project repositioned as web-development work",
      de: "Portfolio-Projekt als Web-Development-Arbeit neu positioniert"
    },
    summary: {
      en: "Updated the Projects set to three focused entries and framed the portfolio itself as a website project within a broader web-building practice, with concise employer/professor-oriented wording.",
      de: "Das Projektset auf drei fokussierte Einträge umgestellt und das Portfolio selbst als Website-Projekt innerhalb einer breiteren Web-Praxis eingeordnet - mit knapper, professoren- und arbeitgeberorientierter Formulierung."
    },
    tags: ["Projects", "Portfolio", "Positioning", "EN/DE"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Capstone project entry added to Projects",
      de: "Capstone-Projekteintrag in Projekte ergänzt"
    },
    summary: {
      en: "Added the Norman Police Department call-urgency triage capstone as a scannable EN/DE project card, with full stack tags and expandable extra details.",
      de: "Das Capstone-Projekt zur Anruf-Priorisierung für das Norman Police Department als zweisprachige, gut scannbare Projektkarte ergänzt, inklusive Stack-Tags und ausklappbarer Details."
    },
    tags: ["Projects", "Capstone", "EN/DE"]
  },
  {
    dateISO: "2026-03-04",
    title: {
      en: "Featured NCDC project added to Projects",
      de: "Featured-NCDC-Projekt in Projekte ergänzt"
    },
    summary: {
      en: "Added and surfaced the NCDC Uganda chatbot work as the featured project, with bilingual summary, scoped highlights, tool tags, and progressive disclosure for extra technical details.",
      de: "Die NCDC-Uganda-Chatbot-Arbeit als Featured-Projekt ergänzt, inklusive zweisprachiger Kurzbeschreibung, präziser Highlights, Tool-Tags und ausklappbarer Detailtiefe."
    },
    tags: ["Projects", "NCDC", "Featured", "EN/DE"]
  },
  {
    dateISO: "2026-03-02",
    title: {
      en: "Brown and baby-pink theme pass",
      de: "Theme-Update in Braun und Babyrosa"
    },
    summary: {
      en: "Updated global color tokens and section surfaces to a softer brown plus baby-pink palette. Improved visual consistency across cards, chips, and buttons.",
      de: "Globale Farbtokens und Flächen auf eine weichere Braun- und Babyrosa-Palette umgestellt. Karten, Chips und Buttons wirken jetzt stimmiger."
    },
    tags: ["Design", "Tailwind", "Theme"]
  },
  {
    dateISO: "2026-03-01",
    title: {
      en: "Bilingual routing and language toggle",
      de: "Zweisprachiges Routing und Sprachumschalter"
    },
    summary: {
      en: "Finalized `next-intl` locale routes for `/en` and `/de`, added root redirect behavior, and connected a language toggle that preserves the current path.",
      de: "`next-intl`-Routen für `/en` und `/de` finalisiert, Root-Redirect ergänzt und einen Sprachumschalter mit Pfaderhalt eingebunden."
    },
    tags: ["i18n", "next-intl"],
    links: [
      {
        label: {
          en: "Locale setup",
          de: "Locale-Setup"
        },
        href: "/en"
      }
    ]
  },
  {
    dateISO: "2026-02-28",
    title: {
      en: "CV-backed homepage content refresh",
      de: "Homepage-Inhalte aus dem CV aktualisiert"
    },
    summary: {
      en: "Replaced placeholder copy with CV-based education, experience, leadership, skills, and contact details. Added progressive disclosure to keep sections compact.",
      de: "Platzhaltertexte durch CV-basierte Inhalte zu Ausbildung, Erfahrung, Engagement, Skills und Kontakt ersetzt. Für kompakte Darstellung wurden Ausklapp-Elemente ergänzt."
    },
    tags: ["Content", "UX"]
  },
  {
    dateISO: "2026-02-27",
    title: {
      en: "Download CV actions added",
      de: "Lebenslauf-Download ergänzt"
    },
    summary: {
      en: "Added Download CV actions in the navbar and hero so visitors can quickly access the PDF from both locales.",
      de: "Download-Aktionen für den Lebenslauf in Navbar und Hero ergänzt, damit Besucher den PDF-Lebenslauf in beiden Sprachen schnell finden."
    },
    tags: ["Navigation", "Content"]
  }
];
