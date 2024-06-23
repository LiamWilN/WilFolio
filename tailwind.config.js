/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "colorTheme": "#1CC7C5"
    },
    extend: {
      height: {
        '1/12' : '8.333333%',
        '2/12' : '16.666667%',
        '10/12' : '83.333333%',
        '11/12' : '91.666667%'
      }
    },
  },
  plugins: [],
}

