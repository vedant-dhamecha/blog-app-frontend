/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  darkMode:"media",
  darkMode:"selector",
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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-",
  },
};
