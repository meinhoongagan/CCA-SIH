/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#97D9E1' ,
        customBlue: '#D9AFD9',  // Assign the color a name like 'customBlue'
      }
    },
  },
  plugins: [],
}