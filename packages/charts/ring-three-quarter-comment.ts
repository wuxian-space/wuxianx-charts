import merge from 'lodash.merge'
import type { EChartsOption, PieSeriesOption } from 'echarts'

// #region parameters-types
export type Data = { name: string, value: number, unit: string }[]

/**
 * @default defaultOptions
 */
export interface Options extends Record<string, unknown> {
  colors?: string[]
  ringBg?: string
  textColors?: {
    name?: string
    percent?: string
    value?: string
    unit?: string
  }
  lineWidth?: number
  lineColor?: string
}

/**
 * echarts options
 *
 * @description Customize the configuration options for `echarts`,
 * merging them using `lodash.merge({}, options, ecOptions)`.
 */
export type EcOptions = Partial<EChartsOption> | null
// #endregion parameters-types

// #region default-parameters
const defaultOptions: Options = {
  colors: ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#198754', '#0DCAF0'],
  textColors: {
    name: '#666',
    percent: '#333',
    value: '#333',
    unit: '#888',
  },
  ringBg: '#E3F0FF',
  lineWidth: 130,
  lineColor: 'rgba(0, 0, 0, 0.3)',
}
// #endregion default-parameters

export function ringThreeQuarterComment(data: Data, options?: Options, ecOptions?: EcOptions) {
  const { colors, lineColor, lineWidth, ringBg, textColors } = merge({}, defaultOptions, options) as Required<Options>

  const line = `data:image/svg+xml;uft8,<svg width="${lineWidth}" height="10" xmlns="http://www.w3.org/2000/svg">
    <line
      x1="10"
      y1="5"
      x2="${lineWidth - 10}"
      y2="5"
      stroke="${lineColor}"
      stroke-width="1"
      stroke-dasharray="3,3"
    />
  </svg>`

  let sum = 0

  const pieSeries: PieSeriesOption[] = []

  const lineYAxis: any[] = []

  // 数据处理
  data.forEach((v) => {
    sum = sum + v.value
  })

  // 图表option整理
  data.forEach((item: Data[0] & Record<string, any>, index) => {
    const commonPicSeries: PieSeriesOption = {
      type: 'pie',
      radius: [`${65 - index * 15}% `, `${57 - index * 15}% `],
      clockwise: false,
      center: ['30%', '50%'],
      label: {
        show: false,
      },
      emphasis: {
        scale: false,
      },
    }

    pieSeries.push({
      name: 'pie',
      data: [
        {
          value: item.value,
          name: item.name,
        },
        {
          value: sum - item.value,
          name: '',
          itemStyle: {
            color: 'rgba(0,0,0,0)',
          },
        },
      ],
      ...commonPicSeries,
    })

    pieSeries.push({
      name: 'pie-bg',
      silent: true,
      z: 1,
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: ringBg,
          },
        },
        {
          value: 2.5,
          name: '',
          itemStyle: {
            color: 'rgba(0,0,0,0)',
          },
        },
      ],
      ...commonPicSeries,
    })

    lineYAxis.push({
      value: index,
      textStyle: {
        rich: {
          circle: {
            color: colors[index % colors.length],
            padding: [0, 5],
          },
        },
      },
    })
  })

  return merge({}, {
    color: colors,
    grid: {
      top: '15%',
      bottom: '54%',
      left: '30%',
      containLabel: true,
    },
    yAxis: [{
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter(params: any) {
          const item = data[params]
          const { value, name, unit } = item
          const percent = `${(value / sum * 100).toFixed(1)}% `

          return `{line|}{circle|●}{name|${name}}{bd||}{percent|${percent}}{bd||}{value|${value}}{unit|${unit}}`
        },
        interval: 0,
        inside: true,
        fontSize: 14,
        rich: {
          line: {
            width: lineWidth,
            height: 10,
            backgroundColor: {
              image: line,
            },
          },
          bd: {
            color: '#ccc',
            padding: [0, 5],
          },
          name: {
            color: textColors.name,
          },
          percent: {
            color: textColors.percent,
          },
          value: {
            color: textColors.value,
          },
          unit: {
            color: textColors.unit,
            padding: [0, 0, 0, 5],
          },
        },

        show: true,
      },
      data: lineYAxis,
    }],
    xAxis: [{
      show: false,
    }],
    series: pieSeries,
  }, ecOptions) as EChartsOption
}
