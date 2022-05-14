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
          '50': colors.zinc['50'],
          '100': colors.zinc['100'],
          '200': colors.zinc['200'],
          '300': colors.zinc['300'],
          '400': colors.zinc['400'],
          '500': colors.zinc['500'],
          '600': colors.zinc['600'],
          '700': colors.zinc['700'],
          '800': colors.zinc['800'],
          '900': colors.zinc['900'],
          '950': '#0F0B09',
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