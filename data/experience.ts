export type ExperienceItem = {
  company: { en: string; de: string };
  role: { en: string; de: string };
  period: { en: string; de: string };
  summaryBullets: { en: string; de: string }[];
  extraBullets: { en: string; de: string }[];
};

export const experiences: ExperienceItem[] = [
  {
    company: {
      en: "University of Oklahoma - Arts & Sciences Dean's Office",
      de: "University of Oklahoma - Arts & Sciences Dean's Office"
    },
    role: {
      en: "Tech Support",
      de: "Technischer Support"
    },
    period: {
      en: "Sep 2021 - May 2025",
      de: "Sep 2021 - Mai 2025"
    },
    summaryBullets: [
      {
        en: "Logged and tracked IT incidents for staff and students.",
        de: "IT-Vorfälle für Mitarbeitende und Studierende dokumentiert und nachverfolgt."
      },
      {
        en: "Provided software and hardware support across daily requests.",
        de: "Software- und Hardware-Support im Tagesgeschäft geleistet."
      },
      {
        en: "Installed and configured systems on Windows and macOS devices.",
        de: "Systeme auf Windows- und macOS-Geräten installiert und konfiguriert."
      },
      {
        en: "Troubleshot laptop issues and resolved service disruptions.",
        de: "Laptop-Probleme analysiert und Störungen behoben."
      }
    ],
    extraBullets: [
      {
        en: "Communicated clearly with faculty, staff, and students on technical fixes.",
        de: "Technische Lösungen klar an Fakultät, Mitarbeitende und Studierende kommuniziert."
      }
    ]
  },
  {
    company: {
      en: "Ministry of Internal Affairs",
      de: "Ministry of Internal Affairs"
    },
    role: {
      en: "IT Intern",
      de: "IT-Praktikantin"
    },
    period: {
      en: "Jun 2023 - Dec 2023",
      de: "Jun 2023 - Dez 2023"
    },
    summaryBullets: [
      {
        en: "Delivered technical support to internal teams.",
        de: "Technischen Support für interne Teams geleistet."
      },
      {
        en: "Assisted with network administration tasks.",
        de: "Bei Aufgaben der Netzwerkadministration unterstützt."
      },
      {
        en: "Handled system maintenance, updates, and patches.",
        de: "Systemwartung, Updates und Patches durchgeführt."
      },
      {
        en: "Performed data entry and backups for operational continuity.",
        de: "Datenerfassung und Backups für stabile Abläufe durchgeführt."
      }
    ],
    extraBullets: [
      {
        en: "Supported cybersecurity monitoring and basic awareness checks.",
        de: "Cybersecurity-Monitoring und grundlegende Sicherheitsprüfungen unterstützt."
      },
      {
        en: "Helped train staff on tools and IT processes.",
        de: "Mitarbeitende bei Tools und IT-Prozessen geschult."
      }
    ]
  },
  {
    company: {
      en: "University of Oklahoma - Crimson Callers",
      de: "University of Oklahoma - Crimson Callers"
    },
    role: {
      en: "Call Center Specialist",
      de: "Call-Center-Spezialistin"
    },
    period: {
      en: "Jan 2021 - Apr 2021",
      de: "Jan 2021 - Apr 2021"
    },
    summaryBullets: [
      {
        en: "Engaged alumni through structured outreach calls.",
        de: "Alumni durch strukturierte Outreach-Anrufe betreut."
      },
      {
        en: "Supported fundraising initiatives with clear communication.",
        de: "Fundraising-Initiativen mit klarer Kommunikation unterstützt."
      }
    ],
    extraBullets: []
  }
];
