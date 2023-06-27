const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-phone-input-2/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    extend: {
      colors: {
        'cloud': '#FAFAFA',
        'coal': '#414A47',
        'cotton': '#EDEEEA',
        'orange': '#B14F19',
        'success': 'hsl(141, 71%, 48%)',
        'transparent': 'transparent',
        'turquoise': '#DAE2E0',
        'turquoise-dark': '#DADBC9',
        'warning': '#e45d12',
      },
    },
  },
  plugins: [],
};
