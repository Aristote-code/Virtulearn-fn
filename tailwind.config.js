/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      colors: {
        light: {
          100: "#f8f7f0",
          200: "#fffbe1",
        },
        dark: {
          100: "#bee3ae",
          200: "#0d100b",
        },
      },
    },
  },
  plugins: [],
};
