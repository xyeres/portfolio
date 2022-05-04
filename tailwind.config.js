const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        '900px': '900px',
        '1000px': '1000px',
        '1400px': '1400px',
        '1600px': '1600px',
      },
      colors: {
        'teal-primary':'rgb(87,120,135)',
        'blue-primary': '#3BA0FD',
        'blue-secondary': '#59A4EA',
        'blue-shadow': '#1975CB',
        'purple-primary': '#BC2FFF',
      },
    },
  },
  plugins: [],
}
