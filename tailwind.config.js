/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b65ff",
        kubbyGreen: "#08AC7B",
        lightGreen: "#F5FBF9",
        bold: "#2F3233",
        ashBg: "#F9F9F9",
      },
    },
  },
  plugins: [],
};