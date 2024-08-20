import type { Plugin } from 'vue'
import { kebabCase } from 'lodash-es'

import guideWatch from './guide-watch.vue'
import guideResize from './guide-resize.vue'
import guideEcInstance from './guide-ec-instance.vue'
import guideTypescript from './guide-typescript.vue'

import barSimple from './bar-simple.vue'
import barSimpleConfigured from './bar-simple-configured.vue'
import barHorizontal from './bar-horizontal.vue'
import barHorizontalConfigured from './bar-horizontal-configured.vue'
import barStack from './bar-stack.vue'
import barStackConfigured from './bar-stack-configured.vue'
import barHorizontalStack from './bar-horizontal-stack.vue'
import barHorizontalStackConfigured from './bar-horizontal-stack-configured.vue'

import lineSimple from './line-simple.vue'
import lineSimpleConfigured from './line-simple-configured.vue'
import lineGradientTrend from './line-gradient-trend.vue'
import lineGradientTrendConfigured from './line-gradient-trend-configured.vue'

import pieSimple from './pie-simple.vue'
import pieGapDoughnut from './pie-gap-doughnut.vue'

import radarSimple from './radar-simple.vue'
import radarRainbow from './radar-rainbow.vue'

import ringThreeQuarterComment from './ring-three-quarter-comment.vue'

export const demos = {
  guideWatch,
  guideResize,
  guideEcInstance,
  guideTypescript,

  lineSimple,
  lineSimpleConfigured,
  lineGradientTrend,
  lineGradientTrendConfigured,

  barSimple,
  barSimpleConfigured,
  barHorizontal,
  barHorizontalConfigured,
  barStack,
  barStackConfigured,
  barHorizontalStack,
  barHorizontalStackConfigured,

  pieSimple,
  pieGapDoughnut,

  radarSimple,
  radarRainbow,

  ringThreeQuarterComment,
}

export default {
  install(app) {
    Object.entries(demos).forEach(([key, demo]) => {
      app.component(kebabCase(key), demo)
    })
  },
} as Plugin
