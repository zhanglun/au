'use strict'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  dev: {
    assetsSubDirectory: 'public',
    assetsPublicPath: '/assets'
  },
  build: {
    assetsRoot: resolve('public/assets'),
    assetsSubDirectory: 'static',
    productionSourceMap: false,
    // 如果你希望将应用部署在 www.example.com/bar/ 下
    // 那就需要设置为 /bar/
    // 大部分应用只要设置 / 即可
    assetsPublicPath: '/'
  }
}