/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ✅ Esto es esencial para que funcione el modo oscuro
  theme: {
    extend: {},
  },
  plugins: [],
};
