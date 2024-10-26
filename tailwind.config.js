/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(89,59,139)",
          1: "rgb(84,56,132)",
          2: "rgb(37,19,57)",
          3: "rgb(120,58,140)",
        },
        secondary: "rgb(237,183,3)",
      },
    },
  },
  plugins: [],
};
