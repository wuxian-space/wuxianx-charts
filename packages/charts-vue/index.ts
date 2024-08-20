import type { Directive, Plugin } from 'vue'
import { unref, watch } from 'vue'

import {
  all,

  barHorizontal,
  barHorizontalStack,
  barSimple,
  barStack,

  lineGradientTrend,
  lineSimple,

  pieGapDoughnut,
  pieSimple,
  radarRainbow,

  radarSimple,
  ringThreeQuarterComment,
} from '@wuxianx/charts'

export {
  all,

  lineSimple,
  lineGradientTrend,

  barSimple,
  barHorizontal,
  barStack,
  barHorizontalStack,

  pieSimple,
  pieGapDoughnut,

  radarSimple,
  radarRainbow,

  ringThreeQuarterComment,
}

interface Charts {
  lineSimple: typeof lineSimple
  lineGradientTrend: typeof lineGradientTrend

  barSimple: typeof barSimple
  barStack: typeof barStack
  barHorizontal: typeof barHorizontal
  barHorizontalStack: typeof barHorizontalStack

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

      const _options = options()
      setOption(_options)

      if (typeof _options?.__initialized__ === 'function') {
        _options.__initialized__(chart)
      }

      if (binding.modifiers.watch) {
        watch(binding.value, () => {
          setOption(options())
        }, { deep: true })
      }

      if (binding.modifiers.resize) {
        window.addEventListener('resize', () => {
          chart.resize()
        })
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

      function options() {
        const value = formatValue()
        if (!value)
          return

        const [key, args] = value

        if (!use?.[key]) {
          console.warn(`[@wuxianx/chart-vue]: "${key}" is not registered yet.`)
          return
        }

        // @ts-expect-error yes
        return use[key](...args)
      }

      function setOption(opts = {}) {
        chart.setOption(opts)
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
