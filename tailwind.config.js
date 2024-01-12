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
      dropShadow: {
        '3xl': '0 0 4px rgba(255, 255, 255, 1)',
        '4xl': [
            '0 0 8px rgba(255, 255, 255, 1)',
            '0 0px 16px rgba(255, 255, 255, 1)'
        ]
      },
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
        'moveClouds': 'moveClouds 6s linear infinite',
        'bg': 'bg 6s linear infinite',
      },
      keyframes: {
        moveClouds: {
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
        bg: {
          '0%': {
            opacity: 1,
          },
          '40%, 60%': {
            opacity: .5,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
