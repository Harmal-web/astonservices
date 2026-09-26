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
        ink: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b8b8c1",
          400: "#91919f",
          500: "#747484",
          600: "#5e5e6c",
          700: "#4d4d58",
          800: "#42424b",
          900: "#3a3a41",
          950: "#18181b",
        },
        gold: {
          50: "#fbf8ef",
          100: "#f5edcf",
          200: "#ead99c",
          300: "#dec064",
          400: "#d4a93a",
          500: "#c4922a",
          600: "#a97322",
          700: "#87551f",
          800: "#714521",
          900: "#613a20",
          950: "#381e0e",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        elevated: "0 8px 30px -6px rgb(0 0 0 / 0.25)",
        gold: "0 4px 14px -2px rgb(196 146 42 / 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
