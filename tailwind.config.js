/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tabletText: "434px",
      },
      colors: {
        bananaYellow: "#F4D04E",
        powderBlack: "#111111",
        platinum: "#7F7F7F",
      },
      fontFamily: {
        body: ["Figtree"],
      },
      height: {
        cardImg: "200px",
      },
      borderRadius: {
        card: "1.25rem",
        cardImg: "0.625rem",
      },
      boxShadow: {
        card: "1rem 1rem 0 0 #000000",
        cardMobile: "0.5rem 0.5rem 0 0 #000000",
      },
    },
  },
  plugins: [],
};
