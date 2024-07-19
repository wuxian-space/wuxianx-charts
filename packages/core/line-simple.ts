import { merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'

export function lineSimple(data: Record<string, number>, options?: Partial<EChartsOption>) {
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
        type: 'line',
      },
    ],
  }, options) as EChartsOption
}
