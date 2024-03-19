/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satisfy:['Satisfy', 'cursive'],
      },
      colors: {
        'orange': '#ff8e28',
        "gray":"#8d8d8d",
        'green':'#00a850',
      }
    },
  },
  plugins: [],
}

