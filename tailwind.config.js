module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '29': '7.5rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        yellow: {
          DEFAULT: '#FFEA1F'
        },
        blue: {
          light: '#85d7ff',
          DEFAULT: '#062A72',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff55b2',
          DEFAULT: '#FF43AA',
          dark: '#ff229b',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
