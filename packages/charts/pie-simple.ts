import { merge } from 'lodash-es'
import type { EChartsOption, PieSeriesOption } from 'echarts'
import { toPairs } from './_utils'

// #region Type-Data
export type Data = (NumberObject | NumberKeyValuePairArray)[]
// #endregion Type-Data

// #region Type-EcOptions
export type EcOptions = Partial<EChartsOption>
// #endregion Type-EcOptions

export function pieSimple(data: Data, ecOptions?: EcOptions) {
  const _data = toPairs(data).reduce((acc, [name, value]) => {
    acc.push({
      name,
      value,
    })
    return acc
  }, [] as { name: string, value: number }[])

  const series: PieSeriesOption = {
    type: 'pie',
    data: _data,
  }

  const ec = {
    series,
  } as EChartsOption

  const rest = merge({}, ec, ecOptions) as EChartsOption

  return rest
}
