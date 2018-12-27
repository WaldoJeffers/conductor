const every = require('../src/every')

const object = {
  six: 6,
  two: 2,
  four: 4,
}
const map = new Map(Object.entries(object))
const numbers = Object.values(object)
const set = new Set(numbers)
const isEven = number => number % 2 === 0
const isEvenAsync = async number => isEven(number)
const isGreaterThan7 = number => number > 7
const isGreaterThan7Async = number => isGreaterThan7(number)

describe('every', () => {
  it('should return true if every item in the input collection satisfies the predicate', () => {
    expect(every(isEven, numbers)).toBe(true)
  })

  it('should return false if no item in the input collection satisfies the predicate', () => {
    expect(every(isGreaterThan7, numbers)).toBe(false)
  })

  it('should work on objects', () => {
    expect(every(isEven, object)).toBe(true)
  })

  it('should work on maps', () => {
    expect(every(isEven, map)).toBe(true)
  })

  it('should work on sets', () => {
    expect(every(isEven, set)).toBe(true)
  })

  it.skip('should work with an asynchronous predicate', async () => {
    expect(every(isEvenAsync, numbers)).toBeInstanceOf(Promise)
    await expect(every(isEvenAsync, numbers)).resolves.toBe(true)
    await expect(every(isGreaterThan7Async, numbers)).resolves.toBe(false)
  })
})
