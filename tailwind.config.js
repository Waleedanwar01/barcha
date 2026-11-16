/** @type {import('tailwindcss').Config} */
// Colours come from CSS variables in app/globals.css.
// Add `theme-dark` to any section to flip it to the dark palette automatically.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        ink: v("fg"), // text
        paper: { DEFAULT: v("bg"), 2: v("bg2") }, // backgrounds
        card: v("card"),
        accent: v("accent"),
        line: "rgb(var(--fg) / 0.1)",
        brand: { 500: "#2F5BFF", 600: "#2448E0" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-slow": "marquee 70s linear infinite",
      },
    },
  },
  plugins: [],
};
