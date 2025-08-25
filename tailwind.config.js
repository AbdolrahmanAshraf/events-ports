/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'amatic': ['"Amatic SC"', 'cursive'],
          'montserrat': ['Montserrat', 'sans-serif'],
          'noto': ['"Noto Sans"', 'sans-serif'],
          dancing: ['"Dancing Script"', 'cursive'],
          playfair: ['"Playfair Display"', 'serif'],
          nunito: ["Nunito", "sans-serif"],
          outfit: ['Outfit', 'sans-serif'],
          mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
        },
        colors: {
          'primary': '#1abc9c',
        },
      },
    },
    plugins: [],
  }