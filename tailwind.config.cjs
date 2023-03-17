/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        serif: ["Lora"],
        mono: ["Inconsolata"],
      },
      colors: {
        black: {
          100: "#3a3a3a",
          200: "#2d2d2d",
          300: "#1f1f1f",
          400: "#050505",
        },
        white: {
          100: "#ffffff",
          200: "#f4f4f4",
          300: "#e9e9e9",
          400: "#757575",
        },
        purple: "#a445ed",
        danger: "#ff5252",
      },
    },
    dropShadow: {
      mz: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    },
  },
  plugins: [],
};
