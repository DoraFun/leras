/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      'choco': ["TTChocolates-Regular"],
    },
    gridTemplateRows: {
      '7': "repeat(7, minmax(0, 1fr))",
      'fit2': "repeat(2, max-content)",
    },
    gridTemplateColumns: {
      'fit2': "repeat(2, max-content)",
    },
    extend: {
      colors: {
        "orange": "#EDB27B",
        "blue": '#6AC1C1',
        "dark": '#1A1A1A',
      }
    },
  },
  plugins: [],
  
}
