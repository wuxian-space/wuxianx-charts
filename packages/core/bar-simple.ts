import type { EChartsOption } from 'echarts'

// #region parameters
export type Data = Record<string, number>
// #endregion parameters

export function barSimple(data: Data) {
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