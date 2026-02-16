import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Deep navy base — authoritative, financial */
        background: "hsl(222, 47%, 7%)",
        foreground: "hsl(40, 20%, 95%)",
        /* Warm gold — prestige, not neon */
        primary: {
          DEFAULT: "hsl(38, 65%, 52%)",
          foreground: "hsl(222, 47%, 7%)",
        },
        /* Muted teal — secondary accent, trust */
        accent: {
          DEFAULT: "hsl(170, 35%, 42%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        gold: {
          DEFAULT: "hsl(38, 65%, 52%)",
          light: "hsl(38, 60%, 62%)",
          dark: "hsl(38, 70%, 40%)",
          muted: "hsl(38, 30%, 30%)",
        },
        /* Navy scale */
        navy: {
          DEFAULT: "hsl(222, 47%, 11%)",
          50: "hsl(220, 30%, 96%)",
          100: "hsl(222, 30%, 90%)",
          200: "hsl(222, 30%, 80%)",
          300: "hsl(222, 30%, 65%)",
          400: "hsl(222, 30%, 50%)",
          500: "hsl(222, 35%, 35%)",
          600: "hsl(222, 40%, 25%)",
          700: "hsl(222, 44%, 18%)",
          800: "hsl(222, 47%, 11%)",
          900: "hsl(222, 47%, 7%)",
          950: "hsl(222, 50%, 4%)",
        },
        cream: {
          DEFAULT: "hsl(40, 30%, 92%)",
          dark: "hsl(40, 15%, 80%)",
        },
        card: {
          DEFAULT: "hsl(222, 40%, 10%)",
          hover: "hsl(222, 38%, 13%)",
        },
        border: "hsl(222, 25%, 18%)",
        muted: {
          DEFAULT: "hsl(222, 15%, 38%)",
          foreground: "hsl(222, 12%, 58%)",
        },
        surface: "hsl(222, 40%, 9%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        heading: ["var(--font-outfit)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(ellipse at 30% 0%, hsla(38,65%,52%,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, hsla(222,47%,20%,0.3) 0%, transparent 60%)",
        "gradient-hero":
          "linear-gradient(135deg, hsl(222,47%,7%) 0%, hsl(222,40%,12%) 50%, hsl(222,47%,7%) 100%)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 3s infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "slide-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
