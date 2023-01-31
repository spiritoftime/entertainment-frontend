/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1024px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkBlue: "rgba(16, 20, 30, 1)",
        navColor: "rgba(22, 29, 47, 1)",
        darkBlueTint: "#40434b",
        navTint: "#454a59",
        login: "#161D2F",
        grayBlue: "rgba(90, 105, 143, 1)",
      },
    },
  },
  plugins: [],
};
