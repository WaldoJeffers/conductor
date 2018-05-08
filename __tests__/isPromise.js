const isPromise = require('../src/isPromise')

describe('isPromise', () => {
  it('should return true for a Promise.resolve() value', () => {
    expect(isPromise(Promise.resolve(42))).toBe(true)
  })

  it('should return true for a Promise.reject() value', () => {
    expect(isPromise(Promise.reject(41))).toBe(true)
  })

  it('should return true for the result of new Promise()', () => {
    expect(isPromise(new Promise(() => {}))).toBe(true)
  })

  it('should return true for the result of an async function', () => {
    const asyncFn = async () => 42
    expect(isPromise(asyncFn())).toBe(true)
  })

  it('should return false for other values', () => {
    expect(isPromise(42)).toBe(false)
    expect(isPromise('42')).toBe(false)
    expect(isPromise(new Date())).toBe(false)
    expect(isPromise(() => {})).toBe(false)
    expect(isPromise([])).toBe(false)
    expect(isPromise({})).toBe(false)
  })
})
