/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        mainBlue: '#1BAAD1',
        secondaryBlue: '#82E4FF',
        darkBlue: '#3085C3'
      },
      fontFamily: {
        poppins : ['Poppins', "sans-serif"],
        DelaGothic : ['Dela Gothic One', "cursive"]
      }
    },
  },
  plugins: [],
}