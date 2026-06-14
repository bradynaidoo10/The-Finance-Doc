import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          med: "#1a6fb5",
          light: "#2d8fd4",
          pale: "#e8f1fb",
        },
        gold: {
          DEFAULT: "#c8a84b",
          light: "#e8c96e",
          border: "rgba(200,168,75,0.2)",
        },
        navy: {
          DEFAULT: "#0d1b2a",
          light: "#111827",
        },
        slate: {
          text: "#374151",
          muted: "#6b7280",
        },
        cream: "#f4f7f9",
        wa: "#16a34a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "heartbeat": "heartbeat 2.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.15)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(22,163,74,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(22,163,74,0)" },
        },
      },
      boxShadow: {
        "blue": "0 4px 24px rgba(26,111,181,0.25)",
        "blue-lg": "0 8px 48px rgba(26,111,181,0.35)",
        "gold": "0 4px 24px rgba(200,168,75,0.25)",
        "gold-lg": "0 8px 48px rgba(200,168,75,0.35)",
        "card": "0 2px 16px rgba(13,27,42,0.08)",
        "card-hover": "0 12px 48px rgba(13,27,42,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
