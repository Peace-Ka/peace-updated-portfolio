export type LeadershipItem = {
  title: { en: string; de: string };
  organization: { en: string; de: string };
  period: { en: string; de: string };
};

export const leadershipItems: LeadershipItem[] = [
  {
    title: {
      en: "Secretary",
      de: "Schriftführerin"
    },
    organization: {
      en: "Computer Science Student Board",
      de: "Computer Science Student Board"
    },
    period: {
      en: "Aug 2021 - May 2025",
      de: "Aug 2021 - Mai 2025"
    }
  },
  {
    title: {
      en: "Council Leader",
      de: "Council Leader"
    },
    organization: {
      en: "Dean's Leadership Council",
      de: "Dean's Leadership Council"
    },
    period: {
      en: "Aug 2021 - Dec 2022",
      de: "Aug 2021 - Dez 2022"
    }
  },
  {
    title: {
      en: "Club Leader",
      de: "Club-Leiterin"
    },
    organization: {
      en: "Coding Club, Robert Bosch College",
      de: "Coding Club, Robert Bosch College"
    },
    period: {
      en: "Aug 2019 - Jan 2020",
      de: "Aug 2019 - Jan 2020"
    }
  }
];
