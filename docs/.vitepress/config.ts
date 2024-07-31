import _path from 'node:path'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { snippet } from '@mdit/plugin-snippet'
import { type MarkdownItIncludeOptions, include } from '@mdit/plugin-include'

export default defineConfig({
  title: 'wuxianx-charts',
  description: 'A wuxianx-charts website.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Charts', link: '/guide/overview' },
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
        ],
      },
      {
        text: 'Line',
        base: '/charts/',
        items: [
          { text: 'LineSimple', link: 'line-simple.md' },
        ],
      },
      {
        text: 'Radar',
        base: '/charts/',
        items: [
          { text: 'RadarRainbow', link: 'radar-rainbow.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuxian-space/wuxianx-charts' },
    ],
  },
  vite: {
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
