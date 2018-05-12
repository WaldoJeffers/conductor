const map = require('../../src/transformers/map')

describe('transformers/map', () => {
  it('should return a mapping transformer', () => {
    const double = x => 2 * x
    const reducer = (a, b) => a + b
    const transformer = map(double)
    expect(transformer(reducer)(0, 1)).toBe(2)
    expect(transformer(reducer)(0, 2)).toBe(4)
  })
})
