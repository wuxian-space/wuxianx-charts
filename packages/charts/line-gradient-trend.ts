import { merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'
import { graphic } from 'echarts'
import Color from 'color'
import { formatData } from './bar-simple'

// #region parameters-types
export type NameData = { name: string, data: NumberObject | NumberKeyValuePairArray }[]

export type Data =
  NumberObject |
  NumberKeyValuePairArray |
  NameData

export interface Options {
  lineColors?: string[]
  backgroundColor?: string
  xAxisLabelColor?: string
}

export type EcOptions = Partial<EChartsOption>
// #endregion parameters-types

// #region default-parameters
const defaultOptions: Options = {
  lineColors: ['#00b3f4', '#00ca95'],
  backgroundColor: '#080b30',
  xAxisLabelColor: '#fff',
}
// #endregion default-parameters

export function lineGradientTrend(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { lineColors: itemColor, backgroundColor, xAxisLabelColor } = merge({}, defaultOptions, options) as Required<Options>

  const _data = formatData(data)
  const colors = Array.isArray(itemColor) ? itemColor : [itemColor]

  const series = _data.map((item, index) => {
    const color = colors[index % colors.length]

    return {
      name: item.name,
      data: (item.data || []).map(item => item[1]),
      type: 'line',
      itemStyle: {
        color,
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      smooth: true,
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 15,
      lineStyle: {
        color,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 5,
        shadowOffsetX: 5,
      },
      label: {
        show: true,
        position: 'top',
        color,
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: Color(color).alpha(0.3).string(),
        }, {
          offset: 1,
          color: 'rgba(0,179,244,0)',
        }], false),
        shadowColor: Color(color).alpha(0.9).string(),
        shadowBlur: 20,
      },
    }
  })

  const ec = {
    backgroundColor,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          type: 'solid',
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(0, 255, 233,0)',
            }, {
              offset: 0.5,
              color: 'rgba(255, 255, 255,1)',
            }, {
              offset: 1,
              color: 'rgba(0, 255, 233,0)',
            }],
            global: false,
          },
        },
      },
    },
    grid: {
      top: '50px',
      left: '35px',
      right: '35px',
      bottom: '50px',
    },

    xAxis: {
      type: 'category',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
      axisLabel: {
        color: xAxisLabelColor,
      },
      splitLine: {
        show: false,
      },
      boundaryGap: false,
      data: (_data?.[0]?.data || []).map(item => item[0]),
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
      splitNumber: 4,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series,
  } as EChartsOption

  const rest = merge({}, ec, ecOptions) as EChartsOption

  return rest
}
