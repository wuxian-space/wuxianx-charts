import type { Directive, Plugin } from 'vue'
import { unref, watch } from 'vue'

import {
  barHorizontal,
  barSimple,
  lineSimple,
  pieGapDoughnut,
  pieSimple,
  radarRainbow,
  radarSimple,
  ringThreeQuarterComment,
} from '@wuxianx/charts'

export {
  lineSimple,
  barSimple,
  barHorizontal,
  pieSimple,
  pieGapDoughnut,
  radarSimple,
  radarRainbow,
  ringThreeQuarterComment,
}

interface Charts {
  lineSimple: typeof lineSimple
  barSimple: typeof barSimple
  barHorizontal: typeof barHorizontal
  pieGapDoughnut: typeof pieGapDoughnut
  pieSimple: typeof pieSimple
  radarSimple: typeof radarSimple
  radarRainbow: typeof radarRainbow
  ringThreeQuarterComment: typeof ringThreeQuarterComment
}

type ChartKey = keyof Charts

export type WuxianxChartsValue<T extends ChartKey> = [T, ...Parameters<Charts[T]>]

export function defineChartOptions<T extends ChartKey>(...options: WuxianxChartsValue<T>) {
  return options
}

export function directive(ec: any, use: WuxianxChartsPluginOptions['use']): Directive<HTMLElement, WuxianxChartsValue<ChartKey>> {
  return {
    mounted(el, binding) {
      let chart = ec.getInstanceByDom(el)
      if (!chart)
        chart = ec.init(el)

      const value = formatValue()
      if (!value)
        return

      const [key, args] = value

      if (!use?.[key]) {
        console.warn(`[@wuxianx/chart-vue]: "${key}" is not registered yet.`)
        return
      }

      // @ts-expect-error yes
      const _options = use[key](...args)

      setOption()

      if (typeof _options.__initialized__ === 'function') {
        _options.__initialized__(chart)
      }

      if (binding.modifiers.watch) {
        watch(binding.value, setOption, { deep: true })
      }

      function formatValue(): [ChartKey, ...WuxianxChartsValue<any>[]] | null {
        const value = unref(binding.value)

        if (Array.isArray(binding.value)) {
          const [key, ...args] = value as WuxianxChartsValue<ChartKey>
          return [key, args]
        }

        else {
          console.warn(`[@wuxianx/chart-vue]: Invalid value: ${value}`)
          return null
        }
      }

      function setOption() {
        chart.setOption(_options)
      }
    },
  }
}

export interface WuxianxChartsPluginOptions {
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
export function plugin(options: WuxianxChartsPluginOptions) {
  const { name, use, ec } = options

  return {
    install(app) {
      app.directive(name || 'ec', directive(ec, use))
    },
  } as Plugin
}
