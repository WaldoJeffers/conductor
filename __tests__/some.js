const some = require('../src/some')

const object = {
  three: 3,
  one: 1,
  four: 4,
}
const map = new Map(Object.entries(object))
const numbers = Object.values(object)
const set = new Set(numbers)
const isEven = number => number % 2 === 0
const isEvenAsync = async number => isEven(number)
const isGreaterThan5 = number => number > 5
const isGreaterThan5Async = number => isGreaterThan5(number)

describe('some', () => {
  it('should return true is at least one item in the input collection satisfies the predicate', () => {
    expect(some(isEven, numbers)).toBe(true)
  })

  it('should return false if no item in the input collection satisfies the predicate', () => {
    expect(some(isGreaterThan5, numbers)).toBe(false)
  })

  it('should work on objects', () => {
    expect(some(isEven, object)).toBe(true)
  })

  it('should work on maps', () => {
    expect(some(isEven, map)).toBe(true)
  })

  it('should work on sets', () => {
    expect(some(isEven, set)).toBe(true)
  })

  it.skip('should work with an asynchronous predicate', async () => {
    expect(some(isEvenAsync, numbers)).toBeInstanceOf(Promise)
    await expect(some(isEvenAsync, numbers)).resolves.toBe(true)
    await expect(some(isGreaterThan5Async, numbers)).resolves.toBe(false)
  })
})
