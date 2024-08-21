import { type DefaultTheme, defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: 'A wuxianx-charts website.',

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/wuxian-space/wuxianx-charts/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024-PRESENT 岳晓亮',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 4],
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '指南', link: '/zh/guide/' },
    { text: '图表概览', activeMatch: '(guide|charts)', link: '/zh/guide/overview' },
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      base: '/zh/guide/',
      items: [
        { text: '快速开始', link: 'index.md' },
        { text: '图表概览', link: 'overview.md' },
      ],
    },
    {
      text: '柱状图',
      base: '/zh/charts/',
      items: [
        { text: '基础柱状图', link: 'bar-simple.md' },
        { text: '堆叠柱状图', link: 'bar-stack.md' },
        { text: '条形图', link: 'bar-horizontal.md' },
        { text: '堆叠条形图', link: 'bar-horizontal-stack.md' },
      ],
    },
    {
      text: '折线图',
      base: '/zh/charts/',
      items: [
        { text: '基础折线图', link: 'line-simple.md' },
        { text: '面积图（趋势图）', link: 'line-gradient-trend.md' },
      ],
    },
    {
      text: '饼图',
      base: '/zh/charts/',
      items: [
        { text: '基础饼图', link: 'pie-simple.md' },
        {
          text: '3/4 注释环形图',
          link: 'ring-three-quarter-comment.md',
        },
        {
          text: '间隙环形图',
          link: 'pie-gap-doughnut.md',
        },
      ],
    },
    {
      text: '雷达图',
      base: '/zh/charts/',
      items: [
        { text: '基础雷达图', link: 'radar-simple.md' },
        { text: '彩虹环形图', link: 'radar-rainbow.md' },
      ],
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
