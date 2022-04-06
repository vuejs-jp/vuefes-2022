const fs = require('fs-extra')
const { resolve } = require('path')

fs.mkdir('tmp', (err) => {
  if (err) { throw err }
})
fs.moveSync(resolve(__dirname, '../dist/'), resolve(__dirname, '../tmp/'))

fs.mkdir('tmp/2022', (err) => {
  if (err) { throw err }
})
fs.moveSync(resolve(__dirname, '../dist/2022/'), resolve(__dirname, '../tmp/2022/'))

fs.rmdir('tmp', (err) => {
  if (err) { throw err }
})
