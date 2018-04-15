const flip = require('../src/flip')

const minus = (a, b) => a - b
const add = (a, b, c, d, e, f) =>
  a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f

describe('flip', () => {
  it('should flip a function paramaters\' order', () => {
    expect(flip(minus)(3, 10)).toBe(7)
  })

  it('should work on functions of any arity', () => {
    expect(flip(add)('you', 'with', 'be', 'force', 'the', 'may')).toBe(
      'may the force be with you'
    )
  })

  it('should be curried', () => {
    expect(flip(minus)(3)(10)).toBe(7)
  })
})
