/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // text
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        // background
        backGround: "hsl(var(--bg-color) / <alpha-value>)",
        foreGround: "hsl(var(--fg-color) / <alpha-value>)",
        primary: "hsl(var(--primary-color) / <alpha-value>)",
        accent: "hsl(var(--accent-color) / <alpha-value>)",
        nature_1: "hsl(var(--neutral-color-1) / <alpha-value>)",
        nature_2: "hsl(var(--neutral-color-2) / <alpha-value>)",
        nature_3: "hsl(var(--neutral-color-3) / <alpha-value>)",
        // content: "hsl(var(--color-content) / <alpha-value>)",
        // content_secondary:
        //   "hsl(var( --color-content-secondary) / <alpha-value>)",
        // navColor: "hsl(var(--color-nav) / <alpha-value>)",
        // bkgDarker: "hsl(var(--color-bkg-alt) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
