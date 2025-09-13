/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        accent: '#4219D0',
        elements: '#E2E6E9',
      },
    },
  },
  plugins: [],
};
