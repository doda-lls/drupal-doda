/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{twig,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather-regular': '"Merriweather", serif;'
      }
    },
  },
  plugins: [],
}