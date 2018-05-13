const iterate = require('../src/iterate')

describe('iterate', () => {
  it('should return a function which will call next() on an iterable when called', () => {
    const iterable = [3, 1, 4]
    const iterator = iterate(iterable)
    expect(iterator()).toBe(3)
    expect(iterator()).toBe(1)
    expect(iterator()).toBe(4)
    expect(iterator()).toBeUndefined()
  })
})
