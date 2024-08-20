import _path from 'node:path'
import fs from 'node:fs'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import type { Plugin } from 'vitepress'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { snippet } from '@mdit/plugin-snippet'
import { type MarkdownItIncludeOptions, include } from '@mdit/plugin-include'
import { minimatch } from 'minimatch'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import { toPairs } from 'lodash-es'

export default defineConfig({
  title: 'wuxianx-charts',
  description: 'A wuxianx-charts website.',
  appearance: false,
  head: [
    ['script', { src: `/charts-meta.js?${Math.floor(Math.random() * 100000)}` }],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4cc5afa3a6dc39071d217e1443bffc50";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Charts', activeMatch: '(guide|charts)', link: '/guide/overview' },
    ],

    sidebar: [
      {
        text: 'Guide',
        base: '/guide/',
        items: [
          { text: 'Getting Started', link: 'index.md' },
          { text: 'Overview', link: 'overview.md' },
        ],
      },
      {
        text: 'Bar',
        base: '/charts/',
        items: [
          { text: 'BarSimple', link: 'bar-simple.md' },
          { text: 'BarHorizontal', link: 'bar-horizontal.md' },
          { text: 'BarStack', link: 'bar-stack.md' },
          { text: 'BarHorizontalStack', link: 'bar-horizontal-stack.md' },
        ],
      },
      {
        text: 'Line',
        base: '/charts/',
        items: [
          { text: 'LineSimple', link: 'line-simple.md' },
          { text: 'LineGradientTrend', link: 'line-gradient-trend.md' },
        ],
      },
      {
        text: 'Pie',
        base: '/charts/',
        items: [
          { text: 'PieSimple', link: 'pie-simple.md' },
          {
            text: 'RingThreeQuarterComment',
            link: 'ring-three-quarter-comment.md',
          },
          {
            text: 'PieGapDoughnut',
            link: 'pie-gap-doughnut.md',
          },
        ],
      },
      {
        text: 'Radar',
        base: '/charts/',
        items: [
          { text: 'RadarSimple', link: 'radar-simple.md' },
          { text: 'RadarRainbow', link: 'radar-rainbow.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuxian-space/wuxianx-charts' },
    ],

    search: {
      provider: 'local',
    },
  },
  vite: {
    plugins: [
      generateOverview(),
      buildChartsMeta(),
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'vue-next',
        })],
      }),
      Components({
        resolvers: [TDesignResolver({
          library: 'vue-next',
        })],
      }),
    ],
    server: {
      host: true,
    },
    build: {
      minify: false,
    },
    resolve: {
      alias: {
        '@': _path.resolve(__dirname, '..'),
      },
    },
  },
  markdown: {
    config(md) {
      // Disable the built-in `snippet` feature of VitePress and switch to using the `@mdit/plugin-snippet` plugin instead.
      md.block.ruler.disable('snippet')

      // @ts-expect-error yes
      md.use(snippet, commonMdConfig())
      // @ts-expect-error yes
      md.use(include, commonMdConfig())

      md.use(container, 'demo', {
        validate(params: string) {
          return params.trim().startsWith('demo ')
        },

        render(tokens: any, idx: number) {
          if (tokens[idx].nesting === 1) {
            const com = tokens[idx].info.trim().split(/\s+/)[1]

            return `<demo>
              <template #component>
                <${com} />
              </template>
            `
          }
          else {
            return '</demo>\n'
          }
        },
      })

      md.use(container, 'chart-preview', {
        validate(params: string) {
          return params.trim().startsWith('chart-preview ')
        },

        render(tokens: any, idx: number) {
          if (tokens[idx].nesting === 1) {
            const [_, com, name] = tokens[idx].info.trim().split(/\s+/)

            return `<chart-preview name="${name || com}">
              <template #component>
                <${com} style="width: 100%; height: 100%" />
              </template>
            `
          }
          else {
            return '</chart-preview>\n'
          }
        },
      })
    },
  },
})

function commonMdConfig() {
  return {
    currentPath: env => env.path,
    resolvePath: (path) => {
      const root = _path.resolve(__dirname, '..', '..')

      const alias = [
        ['@@', 'packages'],
        ['@demos', 'docs', '_demos'],
        ['@', 'docs'],
      ]

      const [aliasKey, ...aliasValue] = alias.find(([key]) => path.startsWith(key)) || []

      if (!aliasKey)
        return path

      return _path.join(root, ...aliasValue, path.replace(aliasKey, ''))
    },
  } as MarkdownItIncludeOptions
}

function buildChartsMeta() {
  return {
    name: 'build-charts-meta',
    enforce: 'pre',
    async configResolved(config) {
      const metaPath = _path.join(config.root, '../packages/charts/meta.json')
      if (!fs.existsSync(metaPath))
        return

      const publicDir = config.publicDir
      if (!fs.existsSync(publicDir)) {
        await mkdir(publicDir, { recursive: true })
      }

      const meta = JSON.parse(await readFile(metaPath, 'utf-8'))
      await writeFile(_path.join(config.publicDir, 'charts-meta.js'), template(meta))
    },
  } as Plugin

  function template(meta: string) {
    const str = `window.__custom__ = { ...(window.__custom__ || {}), chartsMeta: ${JSON.stringify(meta)} }`
    return str
  }
}

function generateOverview() {
  let root: string

  return {
    name: 'generate-overview',

    async configResolved(config) {
      root = config.root
    },

    async watchChange(id, { event: _event }) {
      if (!id.includes('docs/_demos'))
        return

      // if (!['create', 'delete'].includes(_event))
      //   return

      await gen()
    },

  } as Plugin

  async function gen() {
    const overviewConfig = (await import('../_demos/overview.config')).default

    const _ignores = [
      '*.vue',
      ...(overviewConfig?.includes || []),
    ]

    const group: Record<string, string[]> = {}
    function setGroup(key: string, item: string) {
      if (!group[key]) {
        group[key] = []
      }

      group[key].push(item)
    }

    const files = (await readdir(_path.join(root, '_demos')))
      .filter((f) => {
        return _ignores.every(includes => minimatch(f, includes))
      })

    files.forEach((f) => {
      const types = overviewConfig.typesOf[f]

      if (typeof types === 'string') {
        setGroup(types, f)
        return
      }

      if (Array.isArray(types)) {
        types.forEach((type) => {
          setGroup(type, f)
        })

        return
      }

      setGroup(f.split('-')[0], f)
    })

    let result = toPairs(group)
      .sort((_a, _b) => {
        const a = _a[0].toLocaleLowerCase()
        const b = _b[0].toLocaleLowerCase()

        return a.localeCompare(b)
      })
      .map((group) => {
        const [type, items] = group
        items.sort((a, b) => {
          const aGroup = group(a).length
          const bGroup = group(b).length

          if (aGroup !== bGroup) {
            return aGroup - bGroup
          }

          return b.localeCompare(a)

          function group(item: string) {
            return overviewConfig.groupOf[item] || item?.replace('.vue', '')
          }
        })

        return `## ${type}\n\n${items.map((item) => {
          const group = overviewConfig.groupOf[item] || ''
          const name = item.replace('.vue', '')
          const s
            = `::: chart-preview ${name} ${group}\n`
            + `<<< @demos/${item}\n`
            + `:::`

          return s
        }).join('\n\n')}`
      }).join('\n\n')

    result
      = `---\n`
      + `aside: false\n`
      + `---\n\n`
      + `# Overview\n\n`
      + `${result}\n`

    await writeFile(_path.join(root, 'guide/overview.md'), result)
  }
}
