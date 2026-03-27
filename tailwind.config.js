/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["'Fraunces'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        bg: "#E9E0CE",
        bg2: "#DFD4BE",
        bg3: "#D2C5A8",
        card: "#E4D9C6",
        border: "#C8BA9E",
        border2: "#B0A080",
        text: "#1A1712",
        muted: "#5C5240",
        faint: "#8A7A60",
        accent: "#A86200",
        accent2: "#D4820A",
        green: "#2A6B2E",
        term: "#0D1117",
        termBorder: "#30363D",
        termText: "#C9D1D9",
        termMuted: "#8B949E",
      },
      keyframes: {
        pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        chipIn: {
          from: { opacity: "0", transform: "translateY(10px) scale(0.94)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        tagPop: {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(4px)" },
          "60%": { transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        shimmer: { "0%": { left: "-80%" }, "100%": { left: "120%" } },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        blink: "blink 1s infinite",
        chipIn: "chipIn 0.4s ease forwards",
        tagPop: "tagPop 0.35s ease forwards",
        fadeUp: "fadeUp 0.55s ease forwards",
      },
    },
  },
  plugins: [],
};
