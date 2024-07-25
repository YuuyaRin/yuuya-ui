/* eslint-env node */

const config = {
  plugins: [
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      // for、color-mix插件需要配入each组件的beforeEach中，否则each内的mix中会取不到外部变量$(color)
      plugins: {
        beforeEach: [require('postcss-for'), require('postcss-color-mix')]
      }
    })
  ]
}

module.exports = config
