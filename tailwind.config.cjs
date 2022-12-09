/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

//RotateY Utilities
const rotateY = plugin( function ({ addUtilities }){
  addUtilities({
    '.rotate-y-20':{
      transform: 'rotateY(20deg)'
    },
    '.rotate-y-40':{
      transform: 'rotateY(40deg)'
    },
    '.rotate-y-60':{
      transform: 'rotateY(60deg)'
    },
    '.rotate-y-180':{
      transform: 'rotateY(180deg)'
    }
  })
})

const perspective = plugin( function ({ addUtilities }){
  addUtilities({
    '.perspective-1000':{
      perspective: '1000px'
    }
  })
})


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [rotateY, perspective],
}
