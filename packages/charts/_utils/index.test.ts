import { describe, expect, it } from 'vitest'

import { toPairs } from './index'

describe('toPairs', () => {
  it('converts an object to an array of key-value pairs', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(toPairs(obj)).toEqual(Object.entries(obj))
  })

  it('returns the input if it is not a plain object', () => {
    const arr = [1, 2, 3]
    expect(toPairs(arr)).toEqual([...arr])
  })

  it('returns an empty array if the input is an empty object', () => {
    expect(toPairs({})).toEqual([])
  })

  it('does not convert non-object inputs', () => {
    expect(toPairs('string')).toBe('string')
  })

  it('does not convert null input', () => {
    expect(toPairs(null)).toBeNull()
  })
})
