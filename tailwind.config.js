/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      circular: ["Circular Std", "sans-serif"],
    },
    extend: {
      colors: {
        onyx: "#313638ff",
        "french-gray": "#bbbac6ff",
        "ash-gray": "#b7ceceff",
        "prussian-blue": "#1c3144ff",
        chamoisee: "#9b7e46ff",
      },
    },
  },
  plugins: [require("daisyui")],
};
