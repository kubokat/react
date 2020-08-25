const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { 
        test: /\.js/, 
        use: 'babel-loader' 
      },
      { 
        test: /\.css/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}