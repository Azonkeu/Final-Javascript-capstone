const path = require('path');
/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
           'css-loader'],
      },
    ],
  },
};
