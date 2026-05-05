/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#0f172a",
        accent: {
          DEFAULT: '#eadaa5', // Logo Gold
          dark: '#c8b273',
          light: '#fdf9eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
