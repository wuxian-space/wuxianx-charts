import type { Plugin } from 'vue'
import { kebabCase } from 'lodash-es'

import guideWatch from './guide-watch.vue'
import guideEcInstance from './guide-ec-instance.vue'
import guideTypescript from './guide-typescript.vue'

import barSimple from './bar-simple.vue'
import barSimpleConfigured from './bar-simple-configured.vue'

import lineSimple from './line-simple.vue'
import lineSimpleConfigured from './line-simple-configured.vue'

import pieSimple from './pie-simple.vue'
import pieGapDoughnut from './pie-gap-doughnut.vue'

import radarSimple from './radar-simple.vue'
import radarRainbow from './radar-rainbow.vue'

import ringThreeQuarterComment from './ring-three-quarter-comment.vue'

export const demos = {
  guideWatch,
  guideEcInstance,
  guideTypescript,

  lineSimple,
  lineSimpleConfigured,

  barSimple,
  barSimpleConfigured,

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
