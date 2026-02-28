/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f5a8b8",
          400: "#ed7690",
          500: "#e2496b",
          600: "#cd2a54",
          700: "#8B1538",
          800: "#7a1230",
          900: "#4A0E1E",
        },
        rose: {
          50: "#FBF7F5",
          100: "#F5E8EC",
          200: "#ecd1d9",
          300: "#D4698D",
          400: "#c5557d",
          500: "#B83A5E",
          600: "#a02b4d",
          700: "#8B1538",
          800: "#761226",
          900: "#4A0E1E",
        },
        cream: {
          50: "#FDFBF7",
          100: "#FBF7F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Crimson Pro", "serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8B1538 0%, #B83A5E 100%)",
        "gradient-soft": "linear-gradient(135deg, #F5E8EC 0%, #FBF7F5 100%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(139, 21, 56, 0.25)",
    },
    },
  },
  plugins: [],
};
