/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BaseColor: "#B71C1C",
        GreenColor: "#388E3C",
        GrayColor: "#455A64",
        PurpleColor: "#880E4F",
        BHoverColor: "#D32F2F",
      },
      fontFamily: {
        cursiveFont: ["Island Moments", "cursive"],
        paraFont: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
};
