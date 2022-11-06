/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      animation: {
        loop : 'leftinft 1s linear Infinite',
      },
      colors:{
        'Backblue' : '#7FD8E0',
      },
      backgroundImage:{
        'sea': "url('/img/sea.png')",
      }
    },
  },
  plugins: [],
}
