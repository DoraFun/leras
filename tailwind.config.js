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
      '4': "repeat(4, minmax(0, 1fr))",
      '2': "repeat(2, minmax(0, 1fr))"
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        "orange": "#EDB27B",
        "blue": '#6AC1C1',
        "dark": '#1A1A1A',
        "semidark": '#272829',
        "gray": '#A5A5A5',
        "more-gray": '#CCCCCC',
      }
    },
  },
  plugins: [],
  
}
