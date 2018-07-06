module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      flexbox: 'no-2009',
      grid: true
    }),
    require('postcss-svg')({
      dirs: 'icons/',
      svgo: {}
    })
  ]
}
