/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#3b1a37",
        "dark-purple": "#0b1120",
      },
    },
    fontFamily: {
      sassy: ["Sassy Frass", "sans-serif"],
      redacted: ["Redacted Script", "cursive"],
      redactedBlock: ["Redacted", "cursive"],
    },
  },
  plugins: [],
};
