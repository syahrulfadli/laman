/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js,svg}",
    "./assets/**/*.{js,css}",
    "./themes/hugo-theme-novela/assets/**/*.{js,css,html,svg}",
    "./themes/hugo-theme-novela/layouts/**/*.{js,css,html,svg}"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ['poppins','-apple-system','blinkmacsystemfont','neue','helvetica','ubuntu','roboto','noto','segoe ui','arial','sans-serif'],
      'serif': ['Playfair Display', 'ui-serif', 'Georgia, Cambria', "Times New Roman", 'Times', 'serif']
    },
    extend: {
      animation: {
        'blur_onload': 'blur .8s ease-in-out',
      },
      keyframes: {
        blur: {
          '0%': { filter: 'blur(8px)' },
          '100%': { filter: 'blur(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}