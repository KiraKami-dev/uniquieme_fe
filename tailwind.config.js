/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        loop : 'leftinft 1s linear Infinite',
        wiggle: 'wiggle 0.2s ease-in-out infinite',
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
