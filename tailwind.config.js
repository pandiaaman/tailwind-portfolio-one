/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  // content: ["./src/**/*.{html,js,php}"],
  content: ["./*.{html,js,php}"],
  // purge: [], //we dont use purge anymore, it has been renamed as content in tailwind css v3
  darkmode: false,
  theme: {
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      red: colors.red,
      black: colors.black,
      body: "#17171F",
      "selected-text": "#A3A3FF",
      theme: "#3F3FFF",
      nav: "#404053",
      secondary: "#9191A4",
      "input-border": "#565666",
      input: "#2A3A35",
    },
    fontFamily: {
      poppins: ["'poppins'", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio")
    // require("tailwindcss"),
    // require("precss"),
    // require("autoprefixer"),
  ],
};
