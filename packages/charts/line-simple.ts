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
   * @see https://echarts.apache.org/option.html#series-line.itemStyle.color
   */
  itemColor?: string | string[]
}
// #endregion Type-Options

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption>
// #endregion Type-EcOptions

// #region Default-Options
const defaultOptions: Options = {
  itemColor: 'auto',
}
// #endregion Default-Options

export function lineSimple(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { itemColor } = merge({}, defaultOptions, options) as Required<Options>

  const _data = formatData(data)
  const _barColor = Array.isArray(itemColor) ? itemColor : [itemColor]

  const series = _data.map((item, index) => {
    const _color = _barColor[index % _barColor.length]

    return {
      name: item.name,
      data: (item.data || []).map(item => item[1]),
      type: 'line',
      itemStyle: {
        color: _color,
      },
    }
  })

  const ec = {
    xAxis: {
      type: 'category',
      data: (_data?.[0]?.data || []).map(item => item[0]),
    },
    yAxis: {
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
