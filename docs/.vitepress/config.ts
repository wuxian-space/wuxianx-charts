import _path from 'node:path'
import { defineConfig } from 'vitepress'
import { snippet } from '@mdit/plugin-snippet'
import { include } from '@mdit/plugin-include'

export default defineConfig({
  title: 'wuxianx-charts',
  description: 'A wuxianx-charts website.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Charts', link: '/bar/bar-simple' },
    ],

    sidebar: [
      {
        text: 'Bar',
        collapsed: true,
        base: '/bar/',
        items: [
          { text: 'BarSimple', link: 'bar-simple/index.md' },
        ],
      },
      {
        text: 'Line',
        collapsed: true,
        base: '/line/',
        items: [
          { text: 'LineSimple', link: 'line-simple/index.md' },
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
  },
  markdown: {
    config(md) {
      // Disable the built-in `snippet` feature of VitePress and switch to using the `@mdit/plugin-snippet` plugin instead.
      md.block.ruler.disable('snippet')
      md.use(snippet, commonMdConfig())
      md.use(include, commonMdConfig())
    },
  },
})

function commonMdConfig() {
  return {
    currentPath: env => env.path,
    resolvePath: (path) => {
      const root = _path.resolve(__dirname, '..', '..')
      if (path.startsWith('@@')) {
        return _path.join(root, 'packages', path.slice(2))
      }

      if (path.startsWith('@')) {
        return _path.join(root, 'docs', path.slice(1))
      }

      return path
    },
  }
}
