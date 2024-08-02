import { isPlainObject as _isPlainObject, toPairs as _toPairs } from 'lodash-es'

export function toPairs<T = any>(data: any) {
  if (isPlainObject(data))
    return _toPairs<T>(data!)

  return data
}

export function isPlainObject<T = any>(value: T): value is T {
  return _isPlainObject(value)
}
