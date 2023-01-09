/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#7f387a",
      },
      fontFamily: {
        "sans": [Arial,Helvetica,sans-serif],
      }
    },
  },
  plugins: [],
}
