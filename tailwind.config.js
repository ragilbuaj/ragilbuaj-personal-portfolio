/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'migra': ['Migra', 'sans-serif'],
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
      },
      backgroundImage: {
        'main-background': "url('/src/assets/cloud-background.jpg')",
      },
      height: {
        '80vh': '80vh',
      },
      backgroundColor: {
        'background-blue': "rgb(23, 46, 86)",
      },
      animation: {
        contentAnimation: 'contentAnimation 1s ease',
      },
      keyframes: {
        contentAnimation: {
          '0%': { transform: 'scale(0.5)' }, 
          '100%': { transform: 'scale(1)'}
        }
      }
    },
  },
  plugins: [],
}

