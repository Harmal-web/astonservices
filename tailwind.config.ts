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
        // Custom brand palette for Aston Services
        aston: {
          50: "#f4f6f8",
          100: "#e4e9ee",
          200: "#cdd6e0",
          300: "#aab9c9",
          400: "#8095ad",
          500: "#617891",
          600: "#4d6178",
          700: "#3f4f62",
          800: "#374352",
          900: "#313a46",
          950: "#1f252e",
        },
        // Primary - deep professional navy/slate for trust & security
        primary: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
          950: "#0a1929",
        },
        // Accent - refined teal for cleanliness & modernity
        accent: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
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
        elevated: "0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
