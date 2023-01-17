/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js,svg}",
    "./assets/**/*.{js,css}",
    "./themes/hugo-theme-novela/assets/**/*.{js,css}",
    "./themes/hugo-theme-novela/layouts/**/*.{html,svg}"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ['poppins','-apple-system','blinkmacsystemfont','neue','helvetica','ubuntu','roboto','noto','segoe ui','arial','sans-serif'],
      'serif': ['Playfair Display', 'ui-serif', 'Georgia, Cambria', "Times New Roman", 'Times', 'serif']
    },
    extend: {
      colors: {
        github: {
          50: '#546681',
          100: '#4C5D75',
          200: '#445369',
          300: '#3C4A5E',
          400: '#344052',
          500: '#2D3746',
          600: '#252D3A',
          700: '#1D242F',
          800: '#151A23',
          900: '#0D1117',
        }
      },
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