/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Plus Jakarta Sans'"],
        display: ['Athletics'],
    },
    },
  },
  plugins: [],
}

