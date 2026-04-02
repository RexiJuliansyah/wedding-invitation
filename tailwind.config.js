/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5E9DA',
          light: '#FDFCFAB3',
        },
        brown: {
          soft: '#D6C1A3',
          dark: '#8B7355',
        },
        pastel: {
          pink: '#F4E3E5'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
}
