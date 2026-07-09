module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#1D4ED8",
        accent: "#22D3EE",
        highlight: "#FFD400",
        dark: "#050914",
        light: "#FFFFFF",
        brandGray: "#94A3B8",
        navy: {
          950: "#040810",
          900: "#070D1B",
          800: "#0B1425",
          700: "#101C34",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
