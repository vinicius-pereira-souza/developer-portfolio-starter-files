/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        "light-gray": "#75767A",
        "dark-gray": "#2E3038",
        yellow: "#FBE850",
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
        49: "49px",
        73: "73px",
      },
      maxWidth: {
        455: "455px",
        565: "565px",
        675: "675px",
        1140: "1140px",
      },
    },
  },
  plugins: [],
};
