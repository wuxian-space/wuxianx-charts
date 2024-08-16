import { isArray, merge } from 'lodash-es'
import type { EChartsOption } from 'echarts'
import { isPlainObject, toPairs } from './_utils'

// #region parameters-types
export type NameData = { name: string, data: NumberObject | NumberKeyValuePairArray }[]

export type Data =
  NumberObject |
  NumberKeyValuePairArray |
  NameData

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

export type EcOptions = Partial<EChartsOption>
// #endregion parameters-types

// #region default-parameters
const defaultOptions: Options = {
  itemColor: 'auto',
  borderRadius: 0,
}
// #endregion default-parameters
export function formatData(data: NumberObject |
  NumberKeyValuePairArray |
  NameData,
): { name: string, data: NumberKeyValuePairArray }[] {
  if (isPlainObject(data as NumberObject))
    return [{ name: '', data: toPairs<number>(data) }]

  if (isArray(data)) {
    if (data.every(isArray)) {
      return [{ name: '', data: (data as NumberKeyValuePairArray) }]
    }

    return data.map((item: any) => {
      return {
        name: item.name,
        data: toPairs(item.data),
      }
    })
  }

  return []
}

export function barSimple(data: Data, options?: Options | null, ecOptions?: EcOptions) {
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
