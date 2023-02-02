/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Manrope",
      },
      colors: {
        text: "#81AFDD",
        subtext: "#FF8A71",
        bg: "#040C18",
        footer: "#031B34",
        blog: "#042c54",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(90deg, #AE67FA 2%, #F49867 103%)",
        "gradient-bar": "linear-gradient(103deg, #AE67FA -14%, #F49867 100%)",
      },
    },
  },
  plugins: [],
};
