import { merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'

// #region Type-Data
export type Data = [string | number, Record<string, number>][]
// #endregion Type-Data

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption>
// #endregion Type-EcOptions

export function radarSimple(data: Data, ecOptions?: EcOptions) {
  const legendData = []
  const seriesData = []
  const radarIndicator: Record<string, { name: string }> = {}

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const name = item[0].toString()
    const value = item[1]

    legendData.push(name)

    seriesData.push({
      name,
      value: Object.values(value),
    })

    const keys = Object.keys(value)
    for (let j = 0; j < keys.length; j++) {
      const k = keys[j]

      if (!radarIndicator[k]) {
        radarIndicator[k] = {
          name: k,
        }
      }
    }
  }

  const ec = {
    radar: [{
      indicator: Object.values(radarIndicator),
    }],
    series: [{
      name: 'radar',
      type: 'radar',
      data: seriesData,
    }],

  }

  return merge({}, ec, ecOptions) as EChartsOption
}
