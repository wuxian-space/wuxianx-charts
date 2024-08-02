import { existsSync, readdirSync, statSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)

run()

async function run() {
  const pkgs = readdirSync('packages')

  await Promise.all(pkgs.map(updatePkg))
}

async function updatePkg(name) {
  const isPkg = statSync(`packages/${name}`).isDirectory() && existsSync(`packages/${name}/package.json`)

  if (!isPkg)
    return

  const file = path.resolve(`./packages/${name}/package.json`)

  const pkg = require(`../packages/${name}/package.json`)
  if (pkg.private)
    return false

  const rest = {
    ...pkg,
    main: `dist/${name}.cjs.js`,
    module: `dist/${name}.esm-bundler.js`,
    types: `dist/${name}.d.ts`,
    files: [
      'dist',
    ],
    exports: {
      '.': {
        types: `./dist/${name}.d.ts`,
        node: `./dist/${name}.cjs.js`,
        module: `./dist/${name}.esm-bundler.js`,
        import: `./dist/${name}.esm-bundler.js`,
        require: `./dist/${name}.cjs.js`,
      },
      './*': './*',
    },
    author: '岳晓亮 <https://github.com/yuexiaoliang>',
    license: 'MIT',
    homepage: 'https://charts.wuxian.space',
    repository: {
      type: 'git',
      url: 'git+https://github.com/wuxian-space/wuxianx-charts.git',
      directory: `packages/${name}`,
    },
    bugs: {
      url: 'https://github.com/wuxian-space/wuxianx-charts/issues',
    },
  }

  await writeFile(file, JSON.stringify(rest, null, 2))
}
