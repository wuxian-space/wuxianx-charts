import type { Plugin } from 'vue'
import { kebabCase } from 'lodash-es'
import barSimple from './bar-simple.vue'
import lineSimple from './line-simple.vue'

export const demos = {
  lineSimple,
  barSimple,
}

export default {
  install(app) {
    Object.entries(demos).forEach(([key, demo]) => {
      app.component(kebabCase(key), demo)
    })
  },
} as Plugin
