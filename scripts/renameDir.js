const fs = require('fs-extra')
const vm = require('vm')
const devalue = require('devalue')
const { resolve } = require('path')

const generatedDir = resolve(__dirname, '../.output/public')
const publishDir = resolve(__dirname, '../dist')
const yearDir = resolve(publishDir, '2022')
const nestedYearDir = resolve(generatedDir, '2022')

if (!fs.existsSync(generatedDir)) {
  throw new Error(`Missing generated output at ${generatedDir}`)
}

fs.removeSync(publishDir)
fs.ensureDirSync(publishDir)
fs.ensureDirSync(yearDir)

for (const entry of fs.readdirSync(generatedDir)) {
  if (entry === '2022') {
    continue
  }

  fs.copySync(resolve(generatedDir, entry), resolve(yearDir, entry))
}

if (fs.existsSync(nestedYearDir)) {
  fs.copySync(nestedYearDir, yearDir)
}

const htmlFiles = []

const walkHtmlFiles = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = resolve(dir, entry.name)

    if (entry.isDirectory()) {
      walkHtmlFiles(entryPath)
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(entryPath)
    }
  }
}

const extractNuxtPayload = (filePath) => {
  const html = fs.readFileSync(filePath, 'utf8')
  const match = html.match(/<script>window\.__NUXT__=(.*?)<\/script>/s)

  if (!match) {
    return null
  }

  const sandbox = { window: {} }

  vm.runInNewContext(`window.__NUXT__=${match[1]}`, sandbox, { filename: filePath })

  return sandbox.window.__NUXT__
}

const toRelativePath = (value) => value.replace(/^\/+/, '')

const writePayloadFile = ({ routePath, staticAssetsBase, data, fetch, mutations }) => {
  if (!routePath || !staticAssetsBase) {
    return
  }

  const routeDir = routePath === '/' ? '' : toRelativePath(routePath)
  const staticAssetsDir = resolve(publishDir, toRelativePath(staticAssetsBase))
  const payloadDir = routeDir ? resolve(staticAssetsDir, routeDir) : staticAssetsDir
  const payload = devalue({ data, fetch, mutations })
  const payloadScript = `__NUXT_JSONP__(${JSON.stringify(routePath)}, ${payload});\n`

  fs.ensureDirSync(payloadDir)
  fs.writeFileSync(resolve(payloadDir, 'payload.js'), payloadScript)
}

walkHtmlFiles(yearDir)

for (const htmlFile of htmlFiles) {
  const nuxtPayload = extractNuxtPayload(htmlFile)

  if (!nuxtPayload) {
    continue
  }

  writePayloadFile(nuxtPayload)
}
