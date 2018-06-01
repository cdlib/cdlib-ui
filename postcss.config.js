module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      flexbox: 'no-2009'
    }),
    require('postcss-svg')({
      dirs: 'icons/',
      svgo: {}
    })
  ]
}
