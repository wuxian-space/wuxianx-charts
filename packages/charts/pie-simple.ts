import { isArray, merge } from 'lodash-es'
import type { EChartsOption, PieSeriesOption } from 'echarts'
import { toPairs } from './_utils'

// #region parameters-types
export type Data = (NumberObject | NumberKeyValuePairArray)[]

export interface Options {
  /**
   * @see https://echarts.apache.org/option.html#series-pie.radius
   */
  radius?: string | string[]

  /**
   * @see https://echarts.apache.org/option.html#series-pie.itemStyle.borderRadius
   */
  itemRadius?: number

  /**
   * When `radius` is of array type, it takes effect.
   *
   * @see https://echarts.apache.org/option.html#series-pie.emphasis.label.fontSize
   */
  hoverFontSize?: number

  /**
   * When `radius` is of array type, it takes effect.
   *
   * @see https://echarts.apache.org/option.html#series-pie.emphasis.label.color
   */
  hoverColor?: string

  /**
   * When `radius` is of array type, it takes effect.
   *
   * @see https://echarts.apache.org/option.html#series-pie.padAngle
   */
  padAngle?: number
}

export type EcOptions = Partial<EChartsOption>
// #endregion parameters-types

// #region default-parameters
const defaultOptions: Options = {
  radius: '70%',
  hoverFontSize: 20,
  padAngle: 5,
  hoverColor: 'inherit',
  itemRadius: 7,
}
// #endregion default-parameters

export function pieSimple(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { radius, hoverFontSize, padAngle, hoverColor, itemRadius } = merge({}, defaultOptions, options) as Required<Options>

  const _data = toPairs(data).reduce((acc, [name, value]) => {
    acc.push({
      name,
      value,
    })
    return acc
  }, [] as { name: string, value: number }[])

  let series: PieSeriesOption = {
    type: 'pie',
    radius,
    data: _data,
  }

  if (isArray(radius)) {
    series = {
      ...series,
      avoidLabelOverlap: !isArray(radius),
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
      labelLine: {
        show: false,
      },
    }
  }

  const ec = {
    legend: { show: true },
    series,
  } as EChartsOption

  const rest = merge({}, ec, ecOptions) as EChartsOption

  return rest
}
