import merge from 'lodash.merge'
import type { BarSeriesOption, EChartsOption } from 'echarts'

// #region parameters-types
export type Data = Record<string, number> | Record<string, number>[]

export interface Options {
  /**
   * The color of the bar. If `data` passes in an array,
   * different colors can also be defined here by passing in an array.
   *
   * @see https://echarts.apache.org/option.html#series-bar.itemStyle.color
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

export function barSimple(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { itemColor } = merge({}, defaultOptions, options) as Required<Options>

  const _data = Array.isArray(data) ? data : [data]
  const _barColor = Array.isArray(itemColor) ? itemColor : [itemColor]

  const series: BarSeriesOption[] = _data.map((item, index) => {
    return {
      data: Object.values(item),
      type: 'bar',
      itemStyle: {
        color: _barColor[index % _barColor.length],
      },
    }
  })

  const rest = merge({}, {
    xAxis: {
      type: 'category',
      data: Object.keys(_data?.[0] || {}),
    },
    yAxis: {
      type: 'value',
    },
    series,
  }, ecOptions) as EChartsOption

  return rest
}
