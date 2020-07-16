const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/src/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(js|json)$/,
        exclude: [/node_modules/, /dist/],
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            // 为了解决在html中image标签引入的图片路径加载错误的问题
            esModule: false,
            name: 'images/[name].[contenthash:8].[ext]'
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'movie rank',
      template: './public/index.html'
    }),
    new StylelintWebpackPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    })
  ]
}