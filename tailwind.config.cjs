/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Manrope",
      },
      colors: {
        "gradient-text":
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
        "gradient-bar":
          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
        text: "#81AFDD",
        subtext: "#FF8A71",
        bg: "#040C18",
        footer: "#031B34",
        blog: "#042c54",
      },
    },
  },
  plugins: [],
};
