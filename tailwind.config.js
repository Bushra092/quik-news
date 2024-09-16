/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A237E",
        secondary: " #FFFFFF",
        accent: "#2979FF",
        background: "#E0F7FA",
        color: " #646cff",
        linkHover: "#535bf2",
      },
    },
  },
  plugins: [],
};
