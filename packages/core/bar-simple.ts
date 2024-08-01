import { merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'

// #region parameters-types
export type Data = Record<string, number>

export type Options = Partial<EChartsOption>
// #endregion parameters-types

export function barSimple(data: Data, options?: Options) {
  return merge({}, {
    xAxis: {
      type: 'category',
      data: Object.keys(data),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: Object.values(data),
        type: 'bar',
      },
    ],
  }, options) as EChartsOption
}
