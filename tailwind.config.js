/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '41px', letterSpacing: '-0.01em' }],
        'h2': ['22px', { lineHeight: '31px', letterSpacing: '0' }],
        'h3': ['20px', { lineHeight: '26px', letterSpacing: '0' }],
        'h4': ['16px', { lineHeight: '20px', letterSpacing: '0' }],
        'h1-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em' }],
        'h2-lg': ['32px', { lineHeight: '41px', letterSpacing: '0' }],
        'h3-lg': ['22px', { lineHeight: '31px', letterSpacing: '0' }],
        'h4-lg': ['20px', { lineHeight: '26px', letterSpacing: '0' }],
        'uppercase': ['12px', { lineHeight: '11px', letterSpacing: '0.04em' }],
        'button': ['14px', { lineHeight: '21px', letterSpacing: '0' }],
        'body': ['14px', { lineHeight: '21px', letterSpacing: '0' }],
        'small': ['12px', { lineHeight: '15px', letterSpacing: '0' }],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
      },
      colors: {
        'accent': '#4219D0',
        'accent-secondary': '#F4BA47',
        'primary': '#0F0F11',
        'secondary': '#89939A',
        'icons': '#B4BDC3',
        'elements': '#E2E6E9',
        'hover': '#FAFBFC',
        'white': '#FFFFFF',
        'greem': '#27AE60',
        'red': '#EB5757',
      },
    },
  },
  plugins: [],
};
