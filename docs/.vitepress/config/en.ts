import { type DefaultTheme, defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
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
    { text: 'Overview', activeMatch: '(guide|charts)', link: '/guide/overview' },
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
  ]
}
