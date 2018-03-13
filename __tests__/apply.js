const apply = require('../src/apply')

const add = (a, b, c) => a + b + c

describe('apply', () => {
  it('should call the function with a list of arguments passed as an array', () => {
    expect(apply(add, [1, 2, 3])).toBe(6)
  })

  it('should be curried', () => {
    expect(apply(add)([1, 2, 3])).toBe(6)
  })
})
