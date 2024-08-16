import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { barHorizontal, barSimple, lineSimple, pieGapDoughnut, pieSimple, radarRainbow, radarSimple, ringThreeQuarterComment, plugin as vEc } from '@wuxianx/charts-vue'
import * as echarts from 'echarts'
import demos from '../../_demos'
import demo from './demo.vue'
import ChartPreview from './chart-preview.vue'
import chartTags from './chart-tags.vue'

import 'tdesign-vue-next/es/style/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vEc({ use: { lineSimple, pieSimple, pieGapDoughnut, radarSimple, barSimple, barHorizontal, radarRainbow, ringThreeQuarterComment }, ec: echarts }))
    app.use(demos)
    app.component('demo', demo)
    app.component('chart-preview', ChartPreview)
    app.component('chart-tags', chartTags)
  },
} satisfies Theme
