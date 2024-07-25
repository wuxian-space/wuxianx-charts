import type { Plugin } from 'vue'
import { kebabCase } from 'lodash-es'
import lineSimple from './line-simple.vue'
import barSimple from './bar-simple.vue'

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
