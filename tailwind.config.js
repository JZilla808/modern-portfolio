/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "12pro": "390px",
        s8: "360px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
