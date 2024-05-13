/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/index.html"],
  theme: {
    extend: {
      width:{
        '1124':'1124px'
      },
      backgroundColor:{
        primary:'#ffffff',
        secondary:'#5392f9',
        third:'#e12d2d'
      }
    },
  },
  plugins: [],
}