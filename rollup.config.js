import process from 'node:process'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const require = createRequire(import.meta.url)
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const masterVersion = require('./package.json').version

const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)

const resolve = p => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))
const packageOptions = pkg.buildOptions || {}
const name = packageOptions.filename || path.basename(packageDir)

const outputConfigs = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: 'es',
  },
  'esm-browser': {
    file: resolve(`dist/${name}.esm-browser.js`),
    format: 'es',
  },
  'cjs': {
    file: resolve(`dist/${name}.cjs.js`),
    format: 'cjs',
  },
  'global': {
    file: resolve(`dist/${name}.global.js`),
    format: 'iife',
  },
  'dts': {
    file: resolve(`dist/${name}.d.ts`),
    format: 'es',
  },
}

export default ['esm-bundler', 'esm-browser', 'cjs', 'global', 'dts'].map(format => createConfig(format))

function createConfig(format) {
  const input = resolve('index.ts')

  const isBrowserESMBuild = /esm-browser/.test(format)
  const isGlobalBuild = /global/.test(format)
  const isDts = /dts/.test(format)

  if (isDts) {
    return {
      input,
      output: [
        outputConfigs[format],
      ],
      plugins: [dts({
        compilerOptions: {
          preserveSymlinks: false,
        },
      })],
    }
  }

  const output = {
    sourcemap: true,
    banner: `/**
* ${pkg.name} v${masterVersion}
* (c) 2024-present 岳晓亮 <https://github.com/yuexiaoliang>
* @license MIT
**/`,
    ...outputConfigs[format],
  }

  if (isGlobalBuild) {
    output.name = packageOptions.name
  }

  const rest = {
    input,
    output,
    plugins: [
      nodeResolve(),
      commonJS(),
      esbuild({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        sourceMap: output.sourcemap,
        minify: false,
      }),
    ],
    external: resolveExternal(),
  }

  return rest

  function resolveExternal() {
    if (isGlobalBuild || isBrowserESMBuild)
      return []

    return [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.dependencies || {}),
    ]
  }
}
