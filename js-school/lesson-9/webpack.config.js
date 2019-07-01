const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { SourceMapDevToolPlugin } = require('webpack');

const IS_PRODUCTION = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    user: './src/user.js',
    orders: './src/orders.js'
  },
  output: {
    filename: '[name].[hash].js',
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

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    contentBase: path.join(__dirname, 'static'),
    open: false,
    hot: true,
    port: 8090,
    proxy: {
      '/favicon.ico': 'http://pdffiller.com',
      '/api': {
        target: 'https://pdffiller-js-school.brutgroot.com',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
      }
    }
  },

  devtool: IS_PRODUCTION ? 'cheap-module-eval-source-map' : 'source-map',
  mode: IS_PRODUCTION ? 'production' : 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
  ]
}