/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '2/3': '66%',
    },
    lineHeight: {
      '0': '0'
    },
    extend: {},
  },
  plugins: [],
}
