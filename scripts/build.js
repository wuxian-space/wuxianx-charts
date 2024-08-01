import { existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import process from 'node:process'
import { spawn } from 'node:child_process'
import path from 'node:path'

const require = createRequire(import.meta.url)

run()

async function run() {
  const targets = getTargets()

  await Promise.all(targets.map(target => build(target)))
}

async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`)

  if (existsSync(`${pkgDir}/dist`)) {
    await rmSync(`${pkgDir}/dist`, { recursive: true })
  }

  await exec(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `TARGET:${target}`,
      ]
        .filter(Boolean)
        .join(','),
    ],
    { stdio: 'inherit' },
  )
}

function getTargets() {
  return readdirSync('packages').filter((f) => {
    const isPkg = statSync(`packages/${f}`).isDirectory() && existsSync(`packages/${f}/package.json`)

    if (!isPkg)
      return false

    const pkg = require(`../packages/${f}/package.json`)
    if (pkg.private)
      return false

    return true
  })
}

async function exec(command, args, options) {
  return new Promise((resolve, reject) => {
    const _process = spawn(command, args, {
      stdio: [
        'ignore', // stdin
        'pipe', // stdout
        'pipe', // stderr
      ],
      ...options,
      shell: process.platform === 'win32',
    })

    /**
     * @type {Buffer[]}
     */
    const stderrChunks = []
    /**
     * @type {Buffer[]}
     */
    const stdoutChunks = []

    _process.stderr?.on('data', (chunk) => {
      stderrChunks.push(chunk)
    })

    _process.stdout?.on('data', (chunk) => {
      stdoutChunks.push(chunk)
    })

    _process.on('error', (error) => {
      reject(error)
    })

    _process.on('exit', (code) => {
      const ok = code === 0
      // eslint-disable-next-line node/prefer-global/buffer
      const stderr = Buffer.concat(stderrChunks).toString().trim()
      // eslint-disable-next-line node/prefer-global/buffer
      const stdout = Buffer.concat(stdoutChunks).toString().trim()
      const result = { ok, code, stderr, stdout }
      resolve(result)
    })
  })
}
