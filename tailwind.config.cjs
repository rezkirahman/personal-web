/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'montserrat': ['montserrat']
    },
    backgroundImage: {
      site: 'url("https://img5.goodfon.com/wallpaper/nbig/9/7d/ios-13-grey-dark-background.jpg")',
    },
    extend: {
      colors : {
        primary100: '#CDE9AB',
        primary200: '#B7DF86',
        secondary: '#7D67C1',
        tatiary: '#D3D6D7',
      }
    },
  },
  plugins: [],
}
