export type SkillCategory = {
  key: "cs" | "tools" | "os" | "microsoft" | "spoken" | "interpersonal";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "cs",
    items: ["C++", "Python", "Java", "Data Structures", "OOP", "Mathematics Minor"]
  },
  {
    key: "tools",
    items: ["GitHub", "Git Bash", "WordPress", "Zoom", "Skype"]
  },
  {
    key: "os",
    items: ["Windows", "macOS"]
  },
  {
    key: "microsoft",
    items: ["Excel", "Word", "PowerPoint", "Outlook"]
  },
  {
    key: "spoken",
    items: ["English (Fluent)", "Luganda (Fluent)", "German (A2)"]
  },
  {
    key: "interpersonal",
    items: ["Customer service", "Project management", "Communication", "Networking"]
  }
];
