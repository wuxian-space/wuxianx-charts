import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TDesign from 'tdesign-vue-next'
import { barSimple, lineSimple, plugin as vEc } from '@wuxianx/charts-vue'
import demos from '../../_demos'
import demo from './demo.vue'

import 'tdesign-vue-next/es/style/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vEc({ use: { lineSimple, barSimple } }))
    app.use(demos)
    app.use(TDesign)
    app.component('demo', demo)
  },
} satisfies Theme
