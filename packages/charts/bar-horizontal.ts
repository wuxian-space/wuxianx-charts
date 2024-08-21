import { merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'
import { formatData } from './bar-simple'

// #region Type-Data
export type NameData = { name: string, data: NumberObject | NumberKeyValuePairArray }[]

export type Data =
  NumberObject |
  NumberKeyValuePairArray |
  NameData
// #endregion Type-Data

// #region Type-Options
export interface Options {
  /**
   * The color of the bar. If `data` passes in an array,
   * different colors can also be defined here by passing in an array.
   *
   * @see https://echarts.apache.org/option.html#series-bar.itemStyle.color
   */
  itemColor?: string | string[]

  /**
   * @see https://echarts.apache.org/option.html#series-bar.barMaxWidth
   */
  barMaxWidth?: number | string

  /**
   * @see https://echarts.apache.org/option.html#series-bar.barMinWidth
   */
  barMinWidth?: number | string

  /**
   * @see https://echarts.apache.org/option.html#series-bar.itemStyle.borderRadius
   */
  borderRadius?: number | number[]
}
// #endregion Type-Options

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption>
// #endregion Type-EcOptions

// #region Default-Options
const defaultOptions: Options = {
  itemColor: 'auto',
  borderRadius: 0,
}
// #endregion Default-Options

export function barHorizontal(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { itemColor, barMaxWidth, barMinWidth, borderRadius } = merge({}, defaultOptions, options) as Required<Options>

  const _data = formatData(data)
  const _barColor = Array.isArray(itemColor) ? itemColor : [itemColor]

  const series = _data.map((item, index) => {
    const _color = _barColor[index % _barColor.length]

    return {
      name: item.name,
      data: (item.data || []).map(item => item[1]),
      type: 'bar',
      itemStyle: {
        color: _color,
        borderRadius,
      },
      barMaxWidth,
      barMinWidth,
    }
  })

  const ec = {
    yAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      data: (_data?.[0]?.data || []).map(item => item[0]),
    },
    xAxis: {
      type: 'value',
    },
    series,
  } as EChartsOption

  if (series.length > 1) {
    ec.legend = {
      show: true,
    }
  }

  const rest = merge({}, ec, ecOptions) as EChartsOption

  return rest
}
