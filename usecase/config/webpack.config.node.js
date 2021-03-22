const path = require('path')

const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  target: 'node',
  output: {
    path: path.join(__dirname, '..', 'dist', 'node')
  },
  entry: {
    index: './src/index-node.js'
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
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }),
    new VueLoaderPlugin()
  ],
  devtool: false
}
