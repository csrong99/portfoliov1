const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './ui/*.html',
    './js/*'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'timeline': '1fr max-content 1fr',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
    scrollbar: ['dark']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar')
  ],
  colors: {
    gray: colors.gray,
    blue: colors.sky,
    red: colors.rose,
    pink: colors.fuchsia,
  }
}
