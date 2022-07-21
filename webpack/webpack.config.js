const {resolve} = require('path');
// 用于加工html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseCssLoader = ["style-loader", "css-loader"]
// webpacl的详细配置对象
module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'js/app.js',
  },
  module: {
    rules: [
      // 配置解析css
      {
        test: /\.css$/,
        use: [...baseCssLoader],
      },
      {
        test: /\.less$/,
        use: [...baseCssLoader, "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template:'./src/index.html'
    }
  )],
};