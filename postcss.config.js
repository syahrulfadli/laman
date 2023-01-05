module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.HUGO_ENVIRONMENT === 'production'
          ? [purgecss]
          : []
    ]
  }