const path = require('path')

const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'node-webkit',
  output: {
    path: path.join(__dirname, '..', 'dist', 'phpv8', 'current')
  },
  entry: {
    index: './src/index-phpv8.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'null-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  resolve: {
    alias: {
      '@vue/runtime-core$': require.resolve(
        '@vue/runtime-core/dist/runtime-core.cjs.js'
      )
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/index.php' }]
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }),
    new VueLoaderPlugin()
  ],
  devtool: false
}
