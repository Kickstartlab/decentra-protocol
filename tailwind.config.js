/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
     
      black: {
        "50": "#191919",
        "100": "#000",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      purple: {
        "50": "rgba(233, 70, 218, 0.3)",
        "100": "#8350DF",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif"],
      'jakarta': ["'Plus Jakarta Sans', sans-serif"]
    }
  },
  plugins: [],
}
