import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { barSimple, lineSimple, plugin as vEc } from '@wuxianx/charts-vue'
import demos from '../../demos'
import demo from './demo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vEc({ use: { lineSimple, barSimple } }))
    app.use(demos)
    app.component('demo', demo)
  },
} satisfies Theme
