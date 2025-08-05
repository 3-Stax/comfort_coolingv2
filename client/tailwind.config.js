/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // <--- 'content' instead of 'purge'
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'media', // <--- Set to 'media' or remove it
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#0369a1',
        accent: '#f59e0b',
        dark: '#0f172a',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}