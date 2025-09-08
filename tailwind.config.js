/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arima: ['Arima', 'sans-serif'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
