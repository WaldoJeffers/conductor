const every = require('../src/every')

const object = {
  six: 6,
  two: 2,
  four: 4,
}
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)
const isEven = number => number % 2 === 0
const isOdd = number => number % 2 === 1
const isKeyEven = (_, key) => isEven(key)
const isKeyOdd = (_, key) => isOdd(key)
const isLessThan = (nb, value) => value < nb
const isKeyLessThan = nb => (_, key) => isLessThan(nb, key)
const isKeyLessThan2 = isKeyLessThan(2)
const isKeyLessThan3 = isKeyLessThan(3)
const isKeyShorterThan = nb => (_, key) => key.length < nb
const isKeyShorterThan4 = isKeyShorterThan(4)
const isKeyShorterThan5 = isKeyShorterThan(5)
const isEvenAsync = async number => isEven(number)
const isGreaterThan7 = number => number > 7
const isGreaterThan7Async = async number => isGreaterThan7(number)

describe('every', () => {
  describe('checks using a predicate function on values', () => {
    it('should return true if every item in an array satisfies the predicate', () => {
      expect(every(isEven, array)).toBe(true)
      expect(every(isGreaterThan7, array)).toBe(false)
    })

    it('should return true if every item in an object satisfies the predicate', () => {
      expect(every(isEven, object)).toBe(true)
      expect(every(isOdd, object)).toBe(false)
    })

    it('should return true if every item in a map satisfies the predicate', () => {
      expect(every(isEven, map)).toBe(true)
      expect(every(isOdd, map)).toBe(false)
    })

    it('should return true if every item in a set satisfies the predicate', () => {
      expect(every(isEven, set)).toBe(true)
      expect(every(isOdd, set)).toBe(false)
    })
  })

  describe('checks using a predicate function on the key', () => {
    it('should check if every item in an array satisfies the predicate on the key', () => {
      expect(every(isKeyLessThan3, array)).toBe(true)
      expect(every(isKeyLessThan2, array)).toBe(false)
    })

    it('should check if every item in an object satisfies the predicate on the key', () => {
      expect(every(isKeyShorterThan5, object)).toBe(true)
      expect(every(isKeyShorterThan4, object)).toBe(false)
    })

    it('should check if every item in an set satisfies the predicate on the key', () => {
      expect(every(isKeyEven, set)).toBe(true)
      expect(every(isKeyOdd, set)).toBe(false)
    })

    it('should check if every item in an map satisfies the predicate on the key', () => {
      expect(every(isKeyShorterThan5, map)).toBe(true)
      expect(every(isKeyShorterThan4, map)).toBe(false)
    })
  })

  it.skip('should work with an asynchronous predicate', async () => {
    expect(every(isEvenAsync, array)).toBeInstanceOf(Promise)
    await expect(every(isEvenAsync, array)).resolves.toBe(true)
    await expect(every(isGreaterThan7Async, array)).resolves.toBe(false)
  })
})
