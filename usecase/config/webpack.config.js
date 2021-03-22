const web = require('./webpack.config.web')
const node = require('./webpack.config.node')
const phpv8Current = require('./webpack.config.phpv8-current')
const phpv8Proposed = require('./webpack.config.phpv8-proposed')

module.exports = [web, node, phpv8Current, phpv8Proposed]
