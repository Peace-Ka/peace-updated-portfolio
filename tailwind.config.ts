import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--text)",
        mist: "var(--surface)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        accent2: "var(--accent2)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(74, 44, 35, 0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
