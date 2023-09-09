/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-soft-bg": "#DDE6ED",
        "my-bg": "#27374D",
        "my-second": "#526D82",
        // "my-button": "#A63A50",
        // "my-button-hover": "#AE4258",
        "my-contrast": "#9DB2BF",
      },
      fontFamily: {
        special: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
