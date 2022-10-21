/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lt-green': '#8a9d8e',
        'bg-blue': '#27253e',
      },
      spacing: {
        '1/8':'12.5%',
        '3/8':'37.5%',
        '5/8':'62.5%',
        '7/8':'87.5%',
      },
      inset:{
        '1/7': '14.3%',
        '2/7': '28.6%',
        '3/7': '42.9%',
        '4/7': '57.1%',
        '5/7': '71.4%',
        '6/7': '85.71%',
      }
    },
  },
  plugins: [],
}