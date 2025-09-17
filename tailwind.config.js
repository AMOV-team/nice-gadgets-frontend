/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  corePlugins: {
    preflight: true,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
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
        // Кольори shadcn/ui
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'chart': {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        // кастомні кольори
        'custom-accent': 'hsl(var(--custom-accent))',
        'custom-accent-secondary': 'hsl(var(--custom-accent-secondary))',
        'custom-primary': 'hsl(var(--custom-primary))',
        'custom-secondary': 'hsl(var(--custom-secondary))',
        'icons': 'hsl(var(--icons))',
        'elements': 'hsl(var(--elements))',
        'hover': 'hsl(var(--hover))',
        'white': 'hsl(var(--white))',
        'green': 'hsl(var(--green))',
        'red': 'hsl(var(--red))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
