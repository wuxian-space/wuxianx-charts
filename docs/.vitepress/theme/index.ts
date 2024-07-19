import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { barSimple, lineSimple, plugin as vEc } from '@wuxianx/charts-vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vEc({ use: { lineSimple, barSimple } }))
  },
} satisfies Theme
