const fs = require('fs-extra')
const { resolve } = require('path')

fs.moveSync(resolve(__dirname, '../dist/_nuxt'), resolve(__dirname, '../dist/static'))
