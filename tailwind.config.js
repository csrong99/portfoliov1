const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'timeline': '1fr max-content 1fr',
      },
    },
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
    gray: colors.coolGray,
    blue: colors.sky,
    red: colors.rose,
    pink: colors.fuchsia,
  }
}
