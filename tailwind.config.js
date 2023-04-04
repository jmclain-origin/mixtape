/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'sassy': ['Sassy Frass', 'sans-serif'],
      'redacted': ['Redacted Script', 'cursive'],
      'redactedBlock': ['Redacted', 'cursive'],
    }
  },
  plugins: [],
}
