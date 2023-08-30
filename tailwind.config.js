/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"League Spartan"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        tablets: "hsl(180, 31%, 95%)",
        "cyan-light": "hsl(180, 8%, 52%)",
        "cyan-dark": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
