const arity = require('../src/arity')

const add = (a, b, c = 0) => a + b + c

describe('arity', () => {
  it('should return a new function of the provided arity', () => {
    expect(arity(2, add).length).toBe(2)
  })

  it('should not pass more arguments than the provided arity', () => {
    expect(arity(2, add)(1, 2, 3)).toBe(3)
  })
})
