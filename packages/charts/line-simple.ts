import merge from 'lodash.merge'
import type { EChartsOption, LineSeriesOption } from 'echarts'

// #region parameters-types
export type Data = Record<string, number> | Record<string, number>[]

export interface Options {
  /**
   * The color of the bar. If `data` passes in an array,
   * different colors can also be defined here by passing in an array.
   *
   * @see https://echarts.apache.org/option.html#series-line.itemStyle.color
   */
  itemColor?: string | string[]
}

export type EcOptions = Partial<EChartsOption>
// #endregion parameters-types

// #region default-parameters
const defaultOptions: Options = {
  itemColor: 'auto',
}
// #endregion default-parameters

export function lineSimple(data: Data, options: Options | null, ecOptions?: EcOptions) {
  const { itemColor } = merge({}, defaultOptions, options) as Required<Options>

  const _data = Array.isArray(data) ? data : [data]
  const _itemColor = Array.isArray(itemColor) ? itemColor : [itemColor]

  const series: LineSeriesOption[] = _data.map((item, index) => {
    return {
      data: Object.values(item),
      type: 'line',
      itemStyle: {
        color: _itemColor[index % _itemColor.length],
      },
    }
  })

  return merge({}, {
    xAxis: {
      type: 'category',
      data: Object.keys(_data?.[0] || {}),
    },
    yAxis: {
      type: 'value',
    },
    series,
  }, ecOptions) as EChartsOption
}
