'use strict'
const path = require('path')
const WebpackAssetsManifest = require('webpack-assets-manifest');
const utils = require('../utils')
const config = require('../config')

console.log(config);

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const publicPath = process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [path.resolve('src', 'index.js')]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash].js',
    publicPath,
  },
  resolve: {
    // 自动补全未带后缀的文件
    extensions: ['.js'],
    // alias: {
    //   '@': resolve('src')
    // }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new WebpackAssetsManifest({
      writeToDisk: true,
      publicPath,
    })
  ],
}