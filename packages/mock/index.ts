import mock from 'mockjs'

export interface MockNumberObjectOptions {
  count?: number
  min?: number
  max?: number
  keyMocker?: () => string
}
export function mockNumberObject(options?: MockNumberObjectOptions) {
  const { count, min, max, keyMocker } = {
    ...{
      count: 10,
      min: 50,
      max: 100,
      keyMocker: () => mock.mock('@last'),
    },
    ...options || {},
  }

  const result: Record<string, number> = {}

  let i = 0

  while (true) {
    const k = keyMocker()
    if (result[k] !== undefined)
      continue

    const v = mock.Random.integer(min, max)
    result[k] = v
    i += 1

    if (i >= count)
      break
  }

  return result
}
