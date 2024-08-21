/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          50: '#FFF5E5', // Lightest shade
          100: '#FFE4CC',
          200: '#FFC999',
          300: '#FFAD66',
          400: '#FF9233', // Sunset color
          500: '#FF7700', // Default sunset/bronze color
          600: '#CC5F00',
          700: '#994700',
          800: '#663000',
          900: '#331800', // Darkest bronze shade
        },
      },
    },
  },
  plugins: [],
};
