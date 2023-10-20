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
        'moveClouds': 'moveClouds 6s linear infinite',
        'moveGout': 'moveGout 6s linear infinite',
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
        moveGout: {
          '0%': {
            backgroundImage: "url(https://img.icons8.com/color/48/bay-leaf.png)",
            backgroundSize: "cover",
            right: "-20px",
            transform: "rotate(0deg) translateX(100px)",
            filter: "hue-rotate(0deg) contrast(1)",
          },
          "20%": {
            filter:"hue-rotate(60deg)",
          },
          '50%': {
            backgroundImage: "url(https://img.icons8.com/color/48/bay-leaf.png)",
            backgroundSize: "cover",
            transform: "rotate(180deg) translateX(-100px)",
          },
          '100%': {
            backgroundImage: "url(https://img.icons8.com/color/48/bay-leaf.png)",
            backgroundSize: "cover",
            right: "100vw",
            transform: "rotate(360deg) translateX(200px)",
            filter: "hue-rotate(0deg) contrast(1)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
