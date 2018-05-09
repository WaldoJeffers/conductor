const iterate = require('../src/iterate')

describe('iterate', () => {
  it('should return a function which will call next() on an iterable when called', () => {
    const array = [42]
    const iterable = array[Symbol.iterator]()
    expect(iterate(iterable)()).toBe(42)
  })
})
