const path = require('path')

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  target: 'web',
  output: {
    path: path.join(__dirname, '..', 'dist', 'web', 'assets'),
    publicPath: 'assets'
  },
  entry: {
    index: './src/index-web.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '..', 'dist', 'web', 'index.html'),
      template: './src/index.template.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist', 'web')
  },
  devtool: false
}
