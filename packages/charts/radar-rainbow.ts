import { merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'

// #region Type-Data
export type Data = [string | number, Record<string, number>][]
// #endregion Type-Data

// #region Type-Colors
export type Colors = string[] | null
// #endregion Type-Colors

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption> | null
// #endregion Type-EcOptions

// #region Default-Colors
const defaultColors = ['#FFC107', '#DC3545', '#0D6EFD', '#6C757D', '#198754', '#0DCAF0']
// #endregion Default-Colors

export function radarRainbow(data: Data, colors?: Colors, ecOptions?: EcOptions) {
  const _colors = colors || defaultColors

  const legendData = []
  const seriesData = []
  const radarIndicator: Record<string, { name: string }> = {}

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const name = item[0].toString()
    const value = item[1]
    const color = _colors[i % _colors.length]

    legendData.push(name)

    seriesData.push({
      name,
      value: Object.values(value),
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0,
            color,
          }, {
            offset: 0.5,
            color: 'rgba(0,0,0,0)',
          }, {
            offset: 1,
            color,
          }],
          globalCoord: false,
        },
      },
      symbolSize: 2.5,
      itemStyle: {
        borderColor: color,
        borderWidth: 2.5,
      },
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

  const legend = {
    show: true,
    icon: 'circle',
    bottom: 20,
    itemWidth: 11,
    itemHeight: 11,
    itemGap: 24,
    textStyle: {
      fontSize: 14,
      color: '#ade3ff',
      rich: {
        a: {
          verticalAlign: 'middle',
        },
      },
      padding: [3, 0, 0, 3],
    },
    data: legendData,
  }

  return merge({}, {
    backgroundColor: '#101736',
    color: _colors,
    legend,
    radar: [{
      indicator: Object.values(radarIndicator),
      radius: '60%',
      axisName: {
        formatter: '{value}',
        fontSize: 14,
        color: '#5b81cb',
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#141c42', '#141c42'],
        },
      },
      axisLine: {
        lineStyle: {
          color: '#153269',
        },
      },
      splitLine: {
        lineStyle: {
          color: '#113865',
          width: 1,
        },
      },
    }],
    series: [{
      name: 'radar',
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 3,
        },
      },
      data: seriesData,
    }],

  }, ecOptions) as EChartsOption
}
