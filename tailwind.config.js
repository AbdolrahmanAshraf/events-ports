/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class", // enable dark mode by adding 'class'
  theme: {
    extend: {
      fontFamily: {
        'amatic': ['"Amatic SC"', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'noto': ['"Noto Sans"', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'primary': '#1abc9c',
        'main-light': '#001524',
        'main-dark': '#000000',
      },
      animation: {
        pulse: 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
