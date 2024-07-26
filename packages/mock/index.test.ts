import { describe, expect, it } from 'vitest'
import { mockNumberObject } from './index'

describe('@wuxianx/mock => mockNumberObject', () => {
  it('should return an object with 10 properties by default', () => {
    const result = mockNumberObject()
    expect(Object.keys(result)).toHaveLength(10)
  })

  it('should return an object with specified count of properties', () => {
    const count = 5
    const result = mockNumberObject({ count })
    expect(Object.keys(result)).toHaveLength(count)
  })

  it('should return an object with properties in the specified range', () => {
    const min = 1
    const max = 10
    const result = mockNumberObject({ min, max })
    Object.values(result).forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(min)
      expect(value).toBeLessThanOrEqual(max)
    })
  })
})
