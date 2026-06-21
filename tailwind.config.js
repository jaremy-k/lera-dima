/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fff9f5",
        ink: "#251f1d",
        wine: "#a10044",
        rose: "#df6f9b",
        coral: "#f17845",
        lemon: "#f7dc7f",
        olive: "#838f2f",
        sky: "#9ed5e7",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        script: [
          "Segoe Script",
          "Bradley Hand",
          "Comic Sans MS",
          "cursive",
        ],
      },
      boxShadow: {
        paper: "0 18px 46px rgba(64, 48, 40, 0.24)",
        sticker: "10px 12px 0 rgba(158, 213, 231, 0.2)",
      },
    },
  },
  plugins: [],
};
