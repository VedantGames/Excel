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
        swhite: '#777',
        gray: '#333',
        lg: '#666',
        mg: '#555',
        sg: '#444',
        xsg: '#404040',
        green: "#0a5",
        orange: '#fb923c'
      },
      fontFamily: {
        body: ['Calibri', 'Arial','sans-serif'],
      }
    },
  },
  plugins: [],
}

