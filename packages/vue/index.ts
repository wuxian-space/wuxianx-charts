import type { Directive, Plugin } from 'vue'
import { unref, watch } from 'vue'
import * as echarts from 'echarts'

import {
  barSimple,
  lineSimple,
  radarRainbow,
} from '@wuxianx/charts'

export {
  lineSimple,
  barSimple,
  radarRainbow,
}

interface Charts {
  lineSimple: typeof lineSimple
  barSimple: typeof barSimple
  radarRainbow: typeof radarRainbow
}

type ChartKey = keyof Charts

export type WuxianChartsArrayValue<T extends ChartKey> = [T, ...Parameters<Charts[T]>]
export interface WuxianChartsObjectValue<T extends ChartKey> { name: T, args: Parameters<Charts[T]>, ec?: echarts.ECharts }

type WuxianChartsValue<T extends ChartKey> = WuxianChartsArrayValue<T> | WuxianChartsObjectValue<T>

export function directive(use: WuxianChartsPluginOptions['use']): Directive<HTMLElement, WuxianChartsValue<ChartKey>> {
  return {
    mounted(el, binding) {
      let ec = echarts.getInstanceByDom(el)
      if (!ec)
        ec = echarts.init(el)

      setOption()

      if (binding.modifiers.watch) {
        watch(binding.value, setOption, { deep: true })
      }

      function formatValue(): [ChartKey, ...WuxianChartsValue<any>[]] | null {
        const value = unref(binding.value)

        if (Array.isArray(binding.value)) {
          const [key, ...args] = value as WuxianChartsArrayValue<ChartKey>
          return [key, args]
        }

        else if (isPlainObject(binding.value)) {
          const { args, name } = value as WuxianChartsObjectValue<ChartKey>
          if (Array.isArray(args)) {
            return [name, args]
          }

          return [name, [args]]
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

        if (isPlainObject(binding.value))
          (binding.value as WuxianChartsObjectValue<any>).ec = ec

        // @ts-expect-error ignore
        ec.setOption(use[key](...args))
      }
    },
  }
}

export interface WuxianChartsPluginOptions {
  /**
   * @default 'ec'
   */
  name?: string

  use: Partial<Charts>
}
export function plugin(options: WuxianChartsPluginOptions) {
  const { name, use } = options

  return {
    install(app) {
      app.directive(name || 'ec', directive(use))
    },
  } as Plugin
}

function isPlainObject(v: any) {
  return Object.prototype.toString.call(v) === '[object Object]'
}
