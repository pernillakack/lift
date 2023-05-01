/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
    'ourRed' : '#DD0000',
    'ourGreen' : '#E1FFDE',
    'ourWhite' : '#FFFFFF'
    },
    textColor: theme =>('colors'),
  textColor: {
   'primary': '#5A5A5A'},
  
   extend: {
     
   },
 },
 plugins: [],
}
