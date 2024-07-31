import type { Plugin } from 'vue'
import { kebabCase } from 'lodash-es'
import barSimple from './bar-simple.vue'
import lineSimple from './line-simple.vue'
import guideWatch from './guide-watch.vue'
import guideEcInstance from './guide-ec-instance.vue'
import radarRainbow from './radar-rainbow.vue'

export const demos = {
  guideWatch,
  guideEcInstance,

  lineSimple,
  barSimple,
  radarRainbow,
}

export default {
  install(app) {
    Object.entries(demos).forEach(([key, demo]) => {
      app.component(kebabCase(key), demo)
    })
  },
} as Plugin
