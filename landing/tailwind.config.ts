import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(180, 25%, 8%)",
        foreground: "hsl(0, 0%, 95%)",
        primary: {
          DEFAULT: "hsl(160, 60%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
          glow: "hsl(160, 60%, 50%)",
        },
        gold: {
          DEFAULT: "hsl(45, 80%, 55%)",
          light: "hsl(45, 80%, 65%)",
          dark: "hsl(45, 80%, 45%)",
        },
        card: {
          DEFAULT: "hsl(180, 20%, 12%)",
          hover: "hsl(180, 20%, 15%)",
        },
        border: "hsl(180, 15%, 20%)",
        muted: {
          DEFAULT: "hsl(180, 10%, 40%)",
          foreground: "hsl(180, 10%, 60%)",
        },
        surface: "hsl(180, 20%, 10%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 40% 20%, hsla(160, 60%, 40%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(45, 80%, 55%, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(160, 60%, 50%, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
