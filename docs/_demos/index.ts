import type { Plugin } from 'vue'
import { kebabCase } from 'lodash-es'
import radarSimple from './radar-simple.vue'
import barSimple from './bar-simple.vue'
import lineSimple from './line-simple.vue'
import pieSimple from './pie-simple.vue'
import guideWatch from './guide-watch.vue'
import guideEcInstance from './guide-ec-instance.vue'
import guideTypescript from './guide-typescript.vue'
import radarRainbow from './radar-rainbow.vue'
import ringThreeQuarterComment from './ring-three-quarter-comment.vue'

export const demos = {
  guideWatch,
  guideEcInstance,
  guideTypescript,

  lineSimple,
  barSimple,
  pieSimple,
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
