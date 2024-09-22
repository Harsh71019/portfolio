/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        center: {
          '0%': { transform: 'translate(50%, 50%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        uncenter: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50%, 50%)' },
        },
      },
      animation: {
        center: 'center 0.5s ease-in-out forwards',
        uncenter: 'uncenter 0.5s ease-in-out forwards',
      },
      colors: {
        primary: {
          DEFAULT: '#006fee',
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b2ff',
          400: '#3398ff',
          500: '#006fee',
          600: '#0056bb',
          700: '#004088',
          800: '#002b55',
          900: '#001522',
        },
        dark: {
          DEFAULT: '#121212',
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#121212',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
