const next = require('../src/next')

describe('next', () => {
  it('should call the next method of an iterable', () => {
    const array = [2, 4]
    const iterable = array[Symbol.iterator]()
    expect(next(iterable)).toBe(2)
  })
})
