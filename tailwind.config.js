/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'custom-red': '#8B0000', // Add your custom background color here
        'redsource': '#701E1E', // {/* Information Sections */}
        'graycustom': '#686868', // {/* Information Sections */}
      },
    },
  },
  plugins: [],
}
