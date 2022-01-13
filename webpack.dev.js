const path = require('path');
/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
 
});
