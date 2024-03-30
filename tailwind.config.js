/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          point: "#52B69A",
        },
        base: {
          white: "#FFFFFF",
          gray10: "#E0E0E0",
          gray20: "#C7C7C7",
          gray30: "#AEAEAE",
          gray40: "#959595",
          gray50: "#777677",
          gray60: "#5A5A5A",
          gray70: "#464646",
          gray80: "#323232",
          gray90: "#121212",
          black: "#000000",
        },
      },
      dropShadow: {
        "nav-shadow": "0px 4px 8px 0px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};
