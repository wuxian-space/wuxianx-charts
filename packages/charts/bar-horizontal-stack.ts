import { merge } from 'lodash-es'
import type { BarSeriesOption, EChartsOption, EChartsType } from 'echarts'
import { formatData } from './bar-simple'
import { isPlainObject } from './_utils'

// #region Type-Data
export type NameData = { name: string, data: NumberObject | NumberKeyValuePairArray }[]

export type Data =
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
  borderRadius?: number | [number, number, number, number]

  showLabel?: boolean
}
// #endregion Type-Options

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption>
// #endregion Type-EcOptions

// #region Default-Options
const defaultOptions: Options = {
  itemColor: 'auto',
  borderRadius: 0,
  showLabel: true,
}
// #endregion Default-Options

export function barHorizontalStack(data: Data, options?: Options | null, ecOptions?: EcOptions) {
  const { itemColor, barMaxWidth, barMinWidth, borderRadius, showLabel } = merge({}, defaultOptions, options) as Required<Options>

  const _data = formatData(data)
  const _barColor = Array.isArray(itemColor) ? itemColor : [itemColor]

  const series = _data.map((item, index) => {
    const _color = _barColor[index % _barColor.length]

    return {
      name: item.name,
      stack: 'total',
      data: (item.data || []).map(item => item[1]),
      type: 'bar',
      itemStyle: {
        color: _color,
      },
      label: { show: showLabel },
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

  if (borderRadius) {
    rest.__initialized__ = (chart: EChartsType) => {
      setSeriesBorderRadius(chart, borderRadius)

      chart.on('legendselectchanged', (event: any) => {
        setSeriesBorderRadius(chart, borderRadius, event?.selected)
      })
    }
  }

  return rest
}

export function setSeriesBorderRadius(chart: EChartsType, borderRadius: Options['borderRadius'], selectedLegend?: DefineObject<boolean>) {
  const options = chart.getOption() as EChartsOption
  if (!borderRadius)
    return

  const arrBorderRadius = typeof borderRadius === 'number' ? [borderRadius, borderRadius, borderRadius, borderRadius] : borderRadius

  const series = options.series as BarSeriesOption[]

  let topIdx = series.length - 1
  let bottomIdx = 0

  if (isPlainObject(selectedLegend)) {
    let firstSet = false

    for (let i = series.length - 1; i >= 0; i--) {
      if (!firstSet && selectedLegend?.[series[i].name!]) {
        topIdx = i
        firstSet = true
      }

      if (selectedLegend?.[series[i].name!]) {
        bottomIdx = i
      }
    }
  }
  const [r0, r1, r2, r3] = arrBorderRadius

  options.series = (options.series as BarSeriesOption[])?.map((item, index) => {
    if (!item.itemStyle) {
      item.itemStyle = {}
    }

    item.itemStyle.borderRadius = [0, 0, 0, 0]

    if (index === topIdx) {
      item.itemStyle.borderRadius[1] = r1
      item.itemStyle.borderRadius[2] = r2
    }

    if (index === bottomIdx) {
      item.itemStyle.borderRadius[0] = r0
      item.itemStyle.borderRadius[3] = r3
    }

    return item
  })

  chart.setOption(options)
}
