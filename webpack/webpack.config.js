const path = require('path');
// webpacl的详细配置对象
module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.js',
  },
  module: {
    rules: [
      // 配置解析css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};