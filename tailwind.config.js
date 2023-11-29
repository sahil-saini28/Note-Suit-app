/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-d-yellow': '#ffd23f',
        'custom-blue': '#000f43',
        'custom-l-yellow': ' #f7f77c',
        'custom-grey': '#abab98',
      },
      animation: {
        bounce: 'bounce 1s ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [
    // Enable the @layer directive for animations
    function ({ addUtilities }) {
      addUtilities({
        '@layer utilities': {
          '.animate-bounce': { animation: 'bounce' },
        },
      });
    },
  ],
}

