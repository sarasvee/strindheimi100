/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#292f93",
        "custom-yellow": "#f5e60a",
      },
    },
  },
  plugins: [],
};
