const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          "dark-900": "#08090a",
          "dark-700": "#17191d",
          "dark-500": "#2a2d34",
          "light-100": "#fdfdfd",
          "light-200": "#f6f7f8",
          "light-300": "#eff1f3",
          primary: "#1098f7",
          tertiary: "#f26430",
          secondary: "#9fd356"
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
