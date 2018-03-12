const flip = require('../src/flip')

const minus = (a, b) => a - b

describe('flip', () => {
  it('should flip a function paramaters\' order', () => {
    expect(flip(minus)(3, 10)).toBe(7)
  })

  it('should not breay currying', () => {
    expect(flip(minus)(3)(10)).toBe(7)
  })
})
