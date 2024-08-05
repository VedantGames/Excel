/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        lwhite: '#eee',
        dwhite: '#ddd',
        gray: '#333',
        lg: '#666',
        sg: '#444'
      },
      fontFamily: {
        body: ['Calibri', 'Arial','sans-serif'],
      }
    },
  },
  plugins: [],
}

