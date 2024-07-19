import { defineConfig } from 'vitepress'

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
})
