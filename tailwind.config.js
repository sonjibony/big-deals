/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
daisyui: {
 themes: [
  {
    dealtheme:{
      primary: '#ff9391',
      secondary: '#eb615b',
      accent: '#bfd1fd',
      neutral: '#3D4451',
      "base-100": "#FFFFFF",
    }
  }
 ]
},
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
