
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7f7f7",
        secondary: "rgb(93, 114, 39)",
        tertiary: "#dafe69",
        mainText: "#777",
        heading: "#222",
        paragraph: "gray",
        yellowbg: "#cfc09f",
        text: "rgb(0, 0, 0)",
      },
      fontSize: {
        small: "14px",
        medium: "25px",
        large: "40px",
        xl: "60px",
      },
      fontWeight: {
        primary: "400",
        secondary: "500",
        tertiary: "600",
      },
      lineHeight: {
        primary: "1.7em",
        secondary: "1.1em",
        tertiary: "1em",
      },
      letterSpacing: {
        primary: "-0.6px",
        wider: "0.1em",
        widest: "0.25em",
      },
      
      backgroundImage: {
        "theme-gradient": "linear-gradient(to right, #5d7227, #203f15)",
        "primary-gradient": "url('../assets/backgroundgradient.png')",
      },
      fontFamily: {
        primary: "'Montserrat', serif",
        secondary: "'DM Sans', sans-serif",
      },
      screens: {
        below900: { max: "900px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
