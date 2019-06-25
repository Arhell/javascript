const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },

  module: {
    rules: [{
      test: /\.ejs$/,
      use: 'ejs-loader'
    },{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    })
  ]
}