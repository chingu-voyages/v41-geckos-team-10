/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      dropShadow: {
        '2xl' : '6px 12px 10px rgba(99, 180, 255, 0.45)',
        'xl-d' : '4px 8px 6px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}