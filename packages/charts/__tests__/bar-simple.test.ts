import { describe, expect, it } from 'vitest'

import { formatData } from '../bar-simple'

describe('bar-simple: ', () => {
  function arr(): NumberKeyValuePairArray {
    return [
      ['a', 12],
      ['b', 23],
      ['c', 34],
    ]
  }
  function obj(): NumberObject {
    return {
      a: 12,
      b: 23,
      c: 34,
    }
  }

  it('data is NumberObject', () => {
    expect(formatData(obj())).toEqual([{ name: '', data: arr() }])
  })

  it('data is NumberKeyValuePairArray', () => {
    expect(formatData(arr())).toEqual([{ name: '', data: arr() }])
  })

  it('data is NameData', () => {
    const data = [
      { name: 'A', data: obj() },
      { name: 'B', data: arr() },
      { name: 'C', data: obj() },
    ]

    const rest = [
      { name: 'A', data: arr() },
      { name: 'B', data: arr() },
      { name: 'C', data: arr() },
    ]

    expect(formatData(data)).toEqual(rest)
  })

  it('data is other', () => {
    expect(formatData(null!)).toEqual([])

    // @ts-expect-error yes
    expect(formatData('abc')).toEqual([])

    // @ts-expect-error yes
    expect(formatData(123!)).toEqual([])
  })
})
