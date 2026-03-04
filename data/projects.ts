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
    slug: "campus-hub",
    title: {
      en: "Campus Hub Planner",
      de: "Campus Hub Planer"
    },
    problem: {
      en: "Student clubs had scattered events across spreadsheets and chats, causing missed deadlines and low participation.",
      de: "Studentische Gruppen verwalteten Termine in Tabellen und Chats, wodurch Fristen oft verpasst wurden."
    },
    solution: {
      en: "Built a multilingual event dashboard with reminders and role-based editing for organizers and members.",
      de: "Ein mehrsprachiges Event-Dashboard mit Erinnerungen und rollenbasiertem Bearbeiten entwickelt."
    },
    highlight: {
      en: "Streamlined collaboration across teams in pilot use.",
      de: "Zusammenarbeit im Pilotbetrieb deutlich vereinfacht."
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    category: "web",
    githubUrl: "https://github.com/peace/campus-hub",
    demoUrl: "https://campus-hub-demo.vercel.app"
  },
  {
    slug: "flood-forecast-lite",
    title: {
      en: "Flood Forecast Lite",
      de: "Flood Forecast Lite"
    },
    problem: {
      en: "Local teams needed faster flood risk insights from weather and terrain data without heavy tooling.",
      de: "Lokale Teams brauchten schnellere Hochwasser-Einschätzungen aus Wetter- und Geländedaten ohne schwere Toolchains."
    },
    solution: {
      en: "Trained a lightweight gradient-boosting pipeline and exposed predictions through a map-first interface.",
      de: "Eine schlanke Gradient-Boosting-Pipeline trainiert und Vorhersagen in einer kartenbasierten Oberfläche bereitgestellt."
    },
    highlight: {
      en: "Balanced model quality with fast inference.",
      de: "Modellqualität und schnelle Inferenz ausgewogen umgesetzt."
    },
    tags: ["Python", "XGBoost", "FastAPI", "Leaflet"],
    category: "ml",
    githubUrl: "https://github.com/peace/flood-forecast-lite"
  },
  {
    slug: "study-sync",
    title: {
      en: "Study Sync",
      de: "Study Sync"
    },
    problem: {
      en: "Distributed student teams struggled to track tasks and learning goals across time zones.",
      de: "Verteilte Studierendenteams hatten Schwierigkeiten, Aufgaben und Lernziele über Zeitzonen hinweg zu koordinieren."
    },
    solution: {
      en: "Designed a sync-first workspace with shared milestones, async check-ins, and progress analytics.",
      de: "Einen Sync-first-Workspace mit gemeinsamen Meilensteinen, asynchronen Check-ins und Fortschrittsanalysen entworfen."
    },
    highlight: {
      en: "Improved visibility for weekly progress tracking.",
      de: "Sichtbarkeit für den wöchentlichen Fortschritt verbessert."
    },
    tags: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/peace/study-sync",
    demoUrl: "https://study-sync-showcase.vercel.app"
  },
  {
    slug: "signal-sentinel",
    title: {
      en: "Signal Sentinel",
      de: "Signal Sentinel"
    },
    problem: {
      en: "Service logs grew quickly, but teams lacked a simple way to spot anomalous incidents early.",
      de: "Service-Logs wuchsen schnell, doch es fehlte eine einfache Möglichkeit, Auffälligkeiten früh zu erkennen."
    },
    solution: {
      en: "Implemented stream processing with rule-based anomaly detection and concise alert summaries.",
      de: "Stream-Processing mit regelbasierter Anomalieerkennung und kompakten Alarmzusammenfassungen umgesetzt."
    },
    highlight: {
      en: "Reduced manual overhead during incident triage.",
      de: "Manuellen Aufwand bei der Incident-Triage reduziert."
    },
    tags: ["Go", "Kafka", "Docker", "Grafana"],
    category: "systems",
    githubUrl: "https://github.com/peace/signal-sentinel"
  }
];
