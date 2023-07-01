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
        'main-background': "url('/src/assets/main-background.jpg')",
      },
    },
  },
  plugins: [],
}

