const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts,svx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...colors,
        'neutral': colors.zinc,
        'primary': colors.sky
      }
    },
  },
  fontFamily: {
    mono: ['IBM Plex Mono', 'monospace'],
    sans: ['IBM Plex Sans', 'sans-serif'],
    serif: ['IBM Plex Serif', 'serif'],
  },
  plugins: [typography],
};

module.exports = config;
