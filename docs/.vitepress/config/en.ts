import { type DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  description: 'A wuxianx-charts website.',

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/wuxian-space/wuxianx-charts/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT 岳晓亮',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/' },
    { text: 'Overview', link: '/guide/overview' },
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
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
        { text: 'Simple Bar', link: 'bar-simple.md' },
        { text: 'Horizontal Bar', link: 'bar-horizontal.md' },
        { text: 'Stacked Bar', link: 'bar-stack.md' },
        { text: 'Horizontal Stacked Bar', link: 'bar-horizontal-stack.md' },
      ],
    },
    {
      text: 'Line',
      base: '/charts/',
      items: [
        { text: 'Simple Line', link: 'line-simple.md' },
        { text: 'Area Chart (Trend Chart)', link: 'line-gradient-trend.md' },
      ],
    },
    {
      text: 'Pie',
      base: '/charts/',
      items: [
        { text: 'Simple Pie', link: 'pie-simple.md' },
        {
          text: 'Three-Quarter Comment Ring',
          link: 'ring-three-quarter-comment.md',
        },
        {
          text: 'Gap Doughnut',
          link: 'pie-gap-doughnut.md',
        },
      ],
    },
    {
      text: 'Radar',
      base: '/charts/',
      items: [
        { text: 'Simple Radar', link: 'radar-simple.md' },
        { text: 'Rainbow Radar', link: 'radar-rainbow.md' },
      ],
    },
  ]
}
