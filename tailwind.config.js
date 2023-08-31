/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"League Spartan"', "sans-serif"],
    },
    boxShadow: {
      sm: "0px 15px 15px 15px rgba(0, 0, 0, 0.03);",
    },
    screens: {
      "2xl": { max: "1300px" },
      xl: { max: "996px" },
      lg: { max: "365px" },
    },
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        tablets: "hsl(180, 31%, 95%)",
        "cyan-light": "hsl(180, 8%, 52%)",
        "cyan-dark": "hsl(180, 14%, 20%)",
      },
      backgroundImage: {
        header: "url('src/assets/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
