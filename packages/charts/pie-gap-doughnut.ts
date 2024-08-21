import { merge } from 'lodash-es'
import type { EChartsOption, EChartsType, PieSeriesOption } from 'echarts'
import { toPairs } from './_utils'

// #region Type-Data
export type Data = (NumberObject | NumberKeyValuePairArray)[]
// #endregion Type-Data

// #region Type-Options
export interface Options {
  /**
   * @see https://echarts.apache.org/option.html#series-pie.radius
   */
  radius?: string[]

  /**
   * @see https://echarts.apache.org/option.html#series-pie.itemStyle.borderRadius
   */
  itemRadius?: number

  /**
   * @see https://echarts.apache.org/option.html#series-pie.emphasis.label.fontSize
   */
  hoverFontSize?: number

  /**
   * @see https://echarts.apache.org/option.html#series-pie.emphasis.label.color
   */
  hoverColor?: string

  /**
   * @see https://echarts.apache.org/option.html#series-pie.padAngle
   */
  padAngle?: number
}
// #endregion Type-Options

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption>
// #endregion Type-EcOptions

// #region Default-Options
const defaultOptions: Options = {
  radius: ['40%', '70%'],
  hoverFontSize: 20,
  padAngle: 5,
  hoverColor: 'inherit',
  itemRadius: 7,
}
// #endregion Default-Options

export function pieGapDoughnut(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { radius, hoverFontSize, padAngle, hoverColor, itemRadius } = merge({}, defaultOptions, options) as Required<Options>

  const _data = toPairs(data).reduce((acc, [name, value]) => {
    acc.push({
      name,
      value,
    })
    return acc
  }, [] as { name: string, value: number }[])

  const series: PieSeriesOption = {
    type: 'pie',
    radius,
    data: _data,
    avoidLabelOverlap: true,
    padAngle,
    itemStyle: {
      borderRadius: itemRadius,
    },
    label: {
      show: false,
      position: 'center',
    },
    emphasis: {
      label: {
        show: true,
        fontSize: hoverFontSize,
        color: hoverColor,
      },
    },
    legendHoverLink: false,
    labelLine: {
      show: false,
    },
  }

  const ec = {
    series,
  } as EChartsOption

  const rest = {
    ...merge({}, ec, ecOptions) as EChartsOption,

    __initialized__: (chart: EChartsType) => {
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
      })

      chart.on('mouseover', (ev) => {
        const { seriesIndex, dataIndex } = ev

        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
        })

        chart.dispatchAction({
          type: 'highlight',
          seriesIndex,
          dataIndex,
        })
      })
    },
  }

  return rest
}
