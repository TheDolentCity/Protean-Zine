const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts,svx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {
      colors: {
        'core': colors.zinc,
        'primary': colors.blue
      }
    },
  },
  plugins: [typography],
};

module.exports = config;