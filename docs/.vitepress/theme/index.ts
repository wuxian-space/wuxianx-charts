import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { barSimple, lineSimple, plugin as vEc } from '@wuxianx/charts-vue'
import bar from '../../bar/bar-simple/index.vue'
import line from '../../line/line-simple/index.vue'
import demo from './demo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vEc({ use: { lineSimple, barSimple } }))
    app.component('demo', demo)
    app.component('bar-simple', bar)
    app.component('line-simple', line)
  },
} satisfies Theme
