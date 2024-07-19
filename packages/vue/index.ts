import type { Directive, Plugin } from 'vue'
import { unref } from 'vue'
import * as echarts from 'echarts'

import {
  barSimple,
  lineSimple,
} from '@wuxianx/charts'

export {
  lineSimple,
  barSimple,
}

interface Charts {
  lineSimple: typeof lineSimple
  barSimple: typeof barSimple
}

type ChartKey = keyof Charts

export type DirectiveValue<T extends ChartKey> = [T, ...Parameters<Charts[T]>]

export function directive(use: PluginOptions['use']): Directive<HTMLElement, any> {
  return (el, binding) => {
    const value = unref(binding.value)
    const params = unref(isPlainObject(value) ? value.data : value)
    const [key, ...args] = params as [ChartKey, ...any[]]

    if (!use?.[key]) {
      console.warn(`[@wuxianx/chart-vue]: "${key}" is not registered yet.`)
      return
    }

    let ec = echarts.getInstanceByDom(el)
    if (!ec)
      ec = echarts.init(el)

    if (isPlainObject(binding.value))
      binding.value.ec = ec

    // @ts-expect-error ignore
    ec.setOption(use[key](...args))
  }
}

export interface PluginOptions {
  /**
   * @default 'ec'
   */
  name?: string

  use: Partial<Charts>
}
export function plugin(options: PluginOptions) {
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
