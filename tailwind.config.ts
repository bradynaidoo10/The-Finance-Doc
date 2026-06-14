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
        gold: {
          DEFAULT: "#c8a84b",
          light: "#e8c96e",
          border: "rgba(200,168,75,0.2)",
        },
        navy: {
          DEFAULT: "#0a0f1e",
          light: "#111827",
        },
        slate: {
          text: "#374151",
          muted: "#6b7280",
        },
        cream: "#f8f8f6",
        wa: "#16a34a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(200,168,75,0.2)" },
          "100%": { boxShadow: "0 0 60px rgba(200,168,75,0.5)" },
        },
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(ellipse at center, rgba(200,168,75,0.15) 0%, transparent 70%)",
        "hero-gradient": "linear-gradient(135deg, #ffffff 0%, #f8f8f6 100%)",
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(200,168,75,0.25)",
        "gold-lg": "0 8px 48px rgba(200,168,75,0.35)",
        "card": "0 2px 16px rgba(10,15,30,0.08)",
        "card-hover": "0 12px 48px rgba(10,15,30,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
