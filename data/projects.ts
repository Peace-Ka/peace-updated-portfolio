export type ProjectCategory = "web" | "ml" | "systems" | "other";

type Localized = { en: string; de: string };

export type Project = {
  slug: string;
  title: Localized;
  summary?: Localized;
  client?: Localized;
  bullets?: Localized[];
  outcome?: Localized;
  problem: Localized;
  solution: Localized;
  highlight: Localized;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  links?: {
    label: Localized;
    href: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ncdc-uganda-ai-chatbots",
    featured: true,
    category: "ml",
    client: {
      en: "NCDC, Uganda",
      de: "NCDC, Uganda"
    },
    title: {
      en: "NCDC Uganda - Document-grounded AI Chatbots for Education",
      de: "NCDC Uganda - Dokumentenbasierte KI-Chatbots für Bildung"
    },
    summary: {
      en: "Deployed two production chatbot prototypes (Botpress + custom HF Spaces) grounded in institutional PDFs for an education platform.",
      de: "Zwei Chatbot-Prototypen (Botpress + eigener HF-Spaces-Bot) produktiv umgesetzt und mit institutionellen PDFs verankert."
    },
    bullets: [
      {
        en: "Built and deployed two AI chatbot prototypes for an education platform: a Botpress knowledge-base bot and a custom Hugging Face Spaces chatbot with an embeddable web widget.",
        de: "Zwei KI-Chatbot-Prototypen für eine Bildungsplattform entwickelt und ausgerollt: Botpress-Wissensbot sowie ein eigener Hugging-Face-Spaces-Chatbot mit einbettbarem Web-Widget."
      },
      {
        en: "Implemented a retrieval-augmented generation (RAG) pipeline (PDF ingestion -> chunking -> embeddings -> FAISS vector search) to ground responses in institutional documents and reduce hallucinations.",
        de: "Eine RAG-Pipeline implementiert (PDF-Ingestion -> Chunking -> Embeddings -> FAISS-Vektorsuche), um Antworten an Dokumente zu binden und Halluzinationen zu reduzieren."
      },
      {
        en: "Developed a FastAPI backend and a lightweight JavaScript/CSS chat-bubble widget, enabling one-script-tag embedding into Moodle.",
        de: "FastAPI-Backend sowie ein schlankes JavaScript/CSS-Chat-Widget gebaut, das sich per einzelnes Script-Tag in Moodle einbetten lässt."
      },
      {
        en: "Debugged and hardened the end-to-end system in production (dependency conflicts, runtime errors, caching, static asset serving, indexing validation), improving reliability and responsiveness.",
        de: "Produktionsprobleme end-to-end behoben (Dependencies, Runtime-Errors, Caching, Static Assets, Index-Validierung) und die Zuverlässigkeit/Reaktionszeit verbessert."
      }
    ],
    outcome: {
      en: "Both prototypes are active; the Botpress deployment is currently preferred for cost and speed while the custom stack remains available for extensibility.",
      de: "Beide Prototypen sind aktiv; aktuell wird Botpress wegen Kosten und Geschwindigkeit bevorzugt, der Custom-Stack bleibt für Erweiterbarkeit verfügbar."
    },
    tags: [
      "Botpress",
      "Hugging Face Spaces",
      "RAG pipeline",
      "PDF ingestion + chunking",
      "Embeddings",
      "FAISS",
      "FastAPI",
      "JavaScript + CSS",
      "Single script-tag widget",
      "Moodle-friendly"
    ],
    demoUrl: "https://ele.ncdc.go.ug/",
    problem: {
      en: "Education users needed fast answers grounded in official institutional documents.",
      de: "Für Nutzer im Bildungsbereich wurden schnelle Antworten benötigt, die auf offiziellen Dokumenten basieren."
    },
    solution: {
      en: "Delivered dual deployment paths (Botpress + custom stack) with production-ready embedding options.",
      de: "Zwei produktive Deployments (Botpress + Custom-Stack) mit praxistauglicher Einbettung umgesetzt."
    },
    highlight: {
      en: "Real client deployment with a clear cost/speed vs extensibility tradeoff.",
      de: "Reales Kundendeployment mit klarem Trade-off zwischen Kosten/Geschwindigkeit und Erweiterbarkeit."
    }
  },
  {
    slug: "norman-police-call-triage-capstone",
    category: "systems",
    client: {
      en: "Norman Police Department",
      de: "Norman Police Department"
    },
    title: {
      en: "Norman Police Department - Call Urgency Triage System (Capstone)",
      de: "Norman Police Department - System zur Priorisierung von Anrufen (Capstone)"
    },
    summary: {
      en: "Built a full-stack capstone system that classifies incoming calls into Extremely Urgent / Urgent / Less Urgent to support faster prioritization.",
      de: "Ein Full-Stack-Capstone-System gebaut, das eingehende Anrufe in Sehr dringend / Dringend / Weniger dringend einstuft, um die Priorisierung zu unterstützen."
    },
    bullets: [
      {
        en: "Designed and implemented an urgency-triage workflow to categorize incoming calls and support dispatch prioritization.",
        de: "Einen Triage-Workflow entworfen und umgesetzt, der eingehende Anrufe nach Dringlichkeit kategorisiert und die Disposition unterstützt."
      },
      {
        en: "Built a React + TypeScript dashboard for reviewing calls and presenting urgency labels clearly for operators.",
        de: "Ein React- + TypeScript-Dashboard entwickelt, das Anrufe übersichtlich darstellt und Dringlichkeitsstufen klar kommuniziert."
      },
      {
        en: "Implemented a Python backend (FastAPI/Flask) with API endpoints to create, label, and retrieve call records.",
        de: "Ein Python-Backend (FastAPI/Flask) implementiert, inkl. API-Endpunkten zum Anlegen, Labeln und Abrufen von Anrufdaten."
      },
      {
        en: "Persisted call data and classifications in MySQL, containerized the system with Docker, and collaborated via GitHub.",
        de: "Klassifikationen in MySQL gespeichert, das System mit Docker containerisiert und die Entwicklung über GitHub koordiniert."
      }
    ],
    outcome: {
      en: "Delivered end-to-end as a capstone: requirements alignment, system design, implementation, and a final demo.",
      de: "End-to-end geliefert: Anforderungen, Systemdesign, Implementierung und Abschlussdemo."
    },
    tags: ["React", "TypeScript", "Python", "FastAPI", "Flask", "MySQL", "Docker", "GitHub"],
    problem: {
      en: "Stakeholders needed a clearer way to triage incoming calls by urgency for faster prioritization.",
      de: "Stakeholder brauchten einen klaren Prozess, um eingehende Anrufe nach Dringlichkeit für eine schnellere Priorisierung einzuordnen."
    },
    solution: {
      en: "Built a full-stack triage platform combining an operator dashboard, API services, and persistent call classification storage.",
      de: "Eine Full-Stack-Triage-Plattform mit Operator-Dashboard, API-Services und persistenter Speicherung der Klassifikationen umgesetzt."
    },
    highlight: {
      en: "Capstone delivered from requirements to final demo with a real public-safety stakeholder.",
      de: "Capstone mit realem Public-Safety-Stakeholder von Anforderungen bis zur Abschlussdemo geliefert."
    }
  },
  {
    slug: "portfolio-web-experience",
    category: "web",
    client: {
      en: "Personal + professional showcase",
      de: "Persönliche + professionelle Präsentation"
    },
    title: {
      en: "Web Portfolio Platform - One of my website builds",
      de: "Web-Portfolio-Plattform - eines meiner Website-Projekte"
    },
    summary: {
      en: "Built this bilingual portfolio as part of a broader website-building practice, with structured content, localization, and clean production deployment.",
      de: "Dieses zweisprachige Portfolio als Teil einer breiteren Website-Praxis aufgebaut - mit strukturierter Inhaltspflege, Lokalisierung und sauberem Production-Deployment."
    },
    bullets: [
      {
        en: "Designed and implemented a modular Next.js App Router architecture with reusable sections and data-driven project rendering.",
        de: "Eine modulare Next.js-App-Router-Architektur mit wiederverwendbaren Sektionen und datengetriebenem Projektrendering entworfen und umgesetzt."
      },
      {
        en: "Implemented end-to-end bilingual UX (EN/DE) using next-intl with locale routing, translated UI labels, and locale-aware formatting.",
        de: "Eine durchgängige zweisprachige UX (EN/DE) mit next-intl umgesetzt, inklusive Locale-Routing, übersetzten UI-Labels und lokalisierter Darstellung."
      },
      {
        en: "Added progressive disclosure patterns (Build Log, expandable project details, compact cards) to keep content scannable for academic and hiring audiences.",
        de: "Progressive-Disclosure-Muster (Build-Log, ausklappbare Projektdetails, kompakte Karten) ergänzt, damit Inhalte für akademische und berufliche Zielgruppen gut scannbar bleiben."
      },
      {
        en: "Prepared repository, documentation, and deployment flow for maintainable iteration and public visibility.",
        de: "Repository, Dokumentation und Deployment-Flow für wartbare Weiterentwicklung und öffentliche Sichtbarkeit vorbereitet."
      }
    ],
    outcome: {
      en: "Represents my website engineering approach: clear structure, maintainable content workflows, and practical product communication.",
      de: "Zeigt meinen Website-Engineering-Ansatz: klare Struktur, wartbare Content-Workflows und praxisnahe Produktkommunikation."
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion", "Vercel-ready"],
    githubUrl: "https://github.com/Peace-Ka/peace-updated-portfolio",
    demoUrl: "https://peace-updated-portfolio.vercel.app/en",
    problem: {
      en: "Needed a professional public website that communicates technical projects clearly without overwhelming the reader.",
      de: "Benötigt wurde eine professionelle Website, die technische Projekte klar kommuniziert, ohne Leser zu überfordern."
    },
    solution: {
      en: "Built a bilingual portfolio system with focused sections, progressive disclosure, and reusable data models.",
      de: "Ein zweisprachiges Portfolio-System mit fokussierten Sektionen, Progressive Disclosure und wiederverwendbaren Datenmodellen umgesetzt."
    },
    highlight: {
      en: "Website-focused engineering showcased through a live, maintainable product.",
      de: "Website-fokussiertes Engineering in einem livefähigen, wartbaren Produkt dargestellt."
    }
  }
];
