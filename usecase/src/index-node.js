/* eslint-disable global-require, no-console */
import { createSSRApp, h } from 'vue'
import App from './App.vue'
const app = createSSRApp({
  render: () => h(App)
})
const path = require('path')
const express = require('express')
const server = express()
const renderer = require('@vue/server-renderer')
const template = require('fs').readFileSync(
  path.resolve(__dirname, '../web/index.html'),
  'utf-8'
)
server.use('/assets', express.static(path.resolve(__dirname, '../web/assets/')))
server.get('*', (req, res) => {
  renderer.renderToString(app).then(html => {
    res.end(template.replace('<div id="app"></div>', html))
  })
})
console.log('started at localhost:8080')
server.listen(8080)
