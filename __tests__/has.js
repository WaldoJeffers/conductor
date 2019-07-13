const has = require('../src/has')

const object = {
  three: undefined,
  one: 1,
  four: null,
}
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)

describe('has', () => {
  it('should check if an array has a property', () => {
    expect(has(0, array)).toBe(true)
    expect(has(3, array)).toBe(false)
  })

  it('should check if a set has a property', () => {
    expect(has(undefined, set)).toBe(true)
    expect(has(2, set)).toBe(false)
  })

  it('should check if an object has a property', () => {
    expect(has('three', object)).toBe(true)
    expect(has('two', object)).toBe(false)
  })

  it('should check if a map has a property', () => {
    expect(has('three', map)).toBe(true)
    expect(has('two', map)).toBe(false)
  })
})
