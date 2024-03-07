/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        soft: "#183B56",
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
      backgroundColor: {
        "dark-hard": "#F33A6A",
        "dark-light": "#959EAD",
        "light-pink": "#FFB6C1",
        "dark-pink": "#A61C37",
        "dark-blue": "#0D2436",
        light: "#5A7184", //dark-light
        gray: "#5A7184", // Replace with the actual color value
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
