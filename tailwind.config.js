/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#75767A",
        "dark-gray": "#2E3038",
      },
      fontFamily: {
        prata: ["Prata", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        36: "36px",
        56: "56px",
      },
      lineHeight: {
        12: "50px",
        27: "27px",
        73: "73px",
      },
    },
  },
  plugins: [],
};
