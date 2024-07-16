/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './backend/index.html',
    './backend/src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
};

