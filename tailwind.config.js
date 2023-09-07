/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-soft-bg": "#AAA",
        "my-bg": "#2e415e",
        "my-second": "#3A96CF",
        "my-button": "#A63A50",
        "my-button-hover": "#AE4258",
        "my-contrast": "#09BC8A",
      },
    },
  },
  plugins: [],
};
