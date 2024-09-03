/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       minHeight: {
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
}