/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      'choco': ["TTChocolates-Regular"],
    },
   
    extend: {
      colors: {
        "orange": "#EDB27B",
        "blue": '#6AC1C1',
        "dark": '#1A1A1A',
        "semidark": '#272829',
        "gray": '#A5A5A5',
        "more-gray": '#CCCCCC',
      },
      gridTemplateRows: {
        '7': "repeat(7, minmax(0, 1fr))",
        'fit2': "repeat(2, max-content)",
        'fit3': "repeat(3, max-content)",
        'fit4': "repeat(4, max-content)",
        'fit5': "repeat(5, max-content)",
      },
      gridTemplateColumns: {
        'fit2': "repeat(2, min-content)",
        'fit3': "repeat(3, max-content)",
        'fit4': "repeat(4, max-content)",
        'fit5': "repeat(5, max-content)",
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      screens: {
        'pls': '980px',
      },
    },
  },
  plugins: [],
  
}
