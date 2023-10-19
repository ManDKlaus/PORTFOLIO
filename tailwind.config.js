/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/img/banner.gif')",
        'developer': "url('/img/developer.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      animation: {
        'moveClouds': 'move 6s linear infinite',
      },
      keyframes: {
        move: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '25%, 75%': {
            opacity: .08,
          },
          '100%': {
            opacity: 0,
            transform: 'scale(3)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
