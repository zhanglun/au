const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('../config');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../../'),
    compress: true,
    port: 9000,
    publicPath: config.dev.assetsPublicPath,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
