const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('../config');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    inline: true,
    open: true,
    compress: true,
    proxy: {
      '!(/__webpack_hmr)': 'http://localhost:8080',
    },
    port: 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
