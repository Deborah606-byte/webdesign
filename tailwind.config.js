/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './components/**/*.{html,js}',
  "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363', 
        element: '#0A2647',
        heading: '#144272',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
