import type { Directive, Plugin } from 'vue'
import { unref, watch } from 'vue'

import {
  barSimple,
  lineSimple,
  radarRainbow,
  ringThreeQuarterComment,
} from '@wuxianx/charts'

export {
  lineSimple,
  barSimple,
  radarRainbow,
  ringThreeQuarterComment,
}

interface Charts {
  lineSimple: typeof lineSimple
  barSimple: typeof barSimple
  radarRainbow: typeof radarRainbow
  ringThreeQuarterComment: typeof ringThreeQuarterComment
}

type ChartKey = keyof Charts

export type WuxianChartsValue<T extends ChartKey> = [T, ...Parameters<Charts[T]>]

export function directive(ec: any, use: WuxianChartsPluginOptions['use']): Directive<HTMLElement, WuxianChartsValue<ChartKey>> {
  return {
    mounted(el, binding) {
      let chart = ec.getInstanceByDom(el)
      if (!chart)
        chart = ec.init(el)

      setOption()

      if (binding.modifiers.watch) {
        watch(binding.value, setOption, { deep: true })
      }

      function formatValue(): [ChartKey, ...WuxianChartsValue<any>[]] | null {
        const value = unref(binding.value)

        if (Array.isArray(binding.value)) {
          const [key, ...args] = value as WuxianChartsValue<ChartKey>
          return [key, args]
        }

        else {
          console.warn(`[@wuxianx/chart-vue]: Invalid value: ${value}`)
          return null
        }
      }

      function setOption() {
        const value = formatValue()
        if (!value)
          return

        const [key, args] = value

        if (!use?.[key]) {
          console.warn(`[@wuxianx/chart-vue]: "${key}" is not registered yet.`)
          return
        }

        // @ts-expect-error ignore
        chart.setOption(use[key](...args))
      }
    },
  }
}

export interface WuxianChartsPluginOptions {
  /**
   * @default 'ec'
   */
  name?: string

  /**
   * echarts
   */
  ec: any

  use: Partial<Charts>
}
export function plugin(options: WuxianChartsPluginOptions) {
  const { name, use, ec } = options

  return {
    install(app) {
      app.directive(name || 'ec', directive(ec, use))
    },
  } as Plugin
}
