const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e63946",
          white: "#f1faee",
          "blue-200": "#a8dadc",
          "blue-500": "#457b9d",
          "blue-800": "#1d3557",
          pink: "#f78888",
          yellow: "#f3d250"
        }
      }
    }
  },
  variants: {
    width: ["responsive", "hover", "focus-within"],
    outline: ["responsive", "hover", "focus"]
  },
  plugins: []
};
