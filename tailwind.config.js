export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#000', // Black background for dark mode
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [], 
}
