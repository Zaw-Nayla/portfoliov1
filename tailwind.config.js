/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011825",
        secondary: "#E9F8F9",
        tertiary: "#A6D1E6",
        quaternary: "#537FE7",
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
}

