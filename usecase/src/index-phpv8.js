/* eslint-disable global-require, no-console */
import { createSSRApp, h } from 'vue'
import App from './App.vue'
const app = createSSRApp({
  render: () => h(App)
})
const renderer = require('@vue/server-renderer')
renderer.renderToString(app).then(html => {
  print(html) // eslint-disable-line no-undef
})
