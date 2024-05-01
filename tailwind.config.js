/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condense": ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
