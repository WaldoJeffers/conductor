const arity = require('../src/arity')

const add = (a, b, c = 0) => a + b + c

describe('arity', () => {
  it('should return a new function of the provided arity', () => {
    expect(arity(2, add).length).toBe(2)
  })

  it('should forward all arguments it receives', () => {
    expect(arity(2, add)(1, 2, 3)).toBe(6)
  })
})
