import type { EChartsOption } from 'echarts'

export function barSimple(data: Record<string, number>) {
  return {
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
  } as EChartsOption
}
