/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        serif: ["Lora"],
        mono: ["Inconsolata"],
      },
      colors:{
        black:{
          100:'#3a3a3a',
          200:'#2d2d2d',
          300:'#1f1f1f',
          400:'#050505'
        },
        white:{
          100:'#ffffff',
          200:'#f4f4f4',
          300:'#e9e9e9',
          400:'#757575'
        },
        purple:'#a445ed'
      },
      red:'#ff5252'
    },
 
  },
  plugins: [],
};
