/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./scripts/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}