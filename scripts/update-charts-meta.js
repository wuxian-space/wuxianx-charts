import { existsSync, readdirSync, statSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import { camelCase } from 'lodash-es'

const require = createRequire(import.meta.url)

run()

async function run() {
  const files = readdirSync('packages/charts')
  const pkg = require(`../packages/charts/package.json`)

  let updated = false

  if (!existsSync('packages/charts/meta.json')) {
    await writeFile(path.resolve('packages/charts/meta.json'), JSON.stringify({
      name: pkg.name,
      version: pkg.version,
      charts: {},
    }))
  }

  const meta = require(`../packages/charts/meta.json`)

  if (meta.version !== pkg.version) {
    meta.version = pkg.version
    updated = true
  }

  if (meta.name !== pkg.name) {
    meta.name = pkg.name
    updated = true
  }

  files.forEach((f) => {
    const isFile = statSync(`packages/charts/${f}`).isFile()
    if (!isFile)
      return

    if (path.extname(f) !== '.ts')
      return

    const name = camelCase(path.basename(f, '.ts'))
    if (['index'].includes(name))
      return

    if (!meta.charts[name]) {
      meta.charts[name] = {
        name,
        fileName: f,
        initialVersion: pkg.version,
      }
      updated = true
    }
  })

  if (updated) {
    await writeFile(path.resolve('packages/charts/meta.json'), JSON.stringify(meta))
  }
}
