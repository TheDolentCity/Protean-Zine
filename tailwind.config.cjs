const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");
const scrollbar = require("tailwind-scrollbar");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts,zine}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['InterVariable', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {
      colors: {
        'core': {
          '50': colors.stone['50'],
          '100': colors.stone['100'],
          '200': colors.stone['200'],
          '300': colors.stone['300'],
          '400': colors.stone['400'],
          '500': colors.stone['500'],
          '600': colors.stone['600'],
          '700': colors.stone['700'],
          '800': colors.stone['800'],
          '900': colors.stone['900'],
        },
        'primary': colors.amber
      }
    },
  },
  plugins: [
    typography,
    scrollbar
  ],
};

module.exports = config;