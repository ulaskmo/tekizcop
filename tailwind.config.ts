import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand: derin orman yeşili — çevre/geri dönüşüm kimliği
        brand: {
          50: "#eefbf3",
          100: "#d6f5e2",
          200: "#b0e9c9",
          300: "#7bd6a8",
          400: "#43bb82",
          500: "#1f9e66",
          600: "#127f53",
          700: "#0f6544",
          800: "#0f5038",
          900: "#0d4230",
          950: "#04251b",
        },
        // Charcoal: metal imalat kimliği, koyu yüzeyler
        charcoal: {
          50: "#f6f7f7",
          100: "#e2e5e6",
          200: "#c5cacc",
          300: "#a0a8ab",
          400: "#7a8386",
          500: "#5f676a",
          600: "#4b5254",
          700: "#3d4244",
          800: "#2b2f31",
          900: "#1c1f20",
          950: "#111314",
        },
        // Accent: sıcak galvaniz/metal tonu — CTA ve vurgular
        metal: {
          100: "#f7f2e8",
          200: "#ece0c8",
          300: "#dcc79b",
          400: "#c9a86a",
          500: "#b48f47",
          600: "#96723a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 7.5rem)",
      },
      maxWidth: {
        container: "80rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 19, 20, 0.04), 0 8px 24px -12px rgba(17, 19, 20, 0.12)",
        "card-hover":
          "0 2px 4px rgba(17, 19, 20, 0.06), 0 24px 48px -16px rgba(17, 19, 20, 0.22)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee-x 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
