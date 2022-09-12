const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Dev',
    template: 'index.html'
  })],
  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};