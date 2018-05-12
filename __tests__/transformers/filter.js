const filter = require('../../src/transformers/filter')

describe('transformers/filter', () => {
  it('should return a filtering transformer', () => {
    const isEven = n => n % 2 === 0
    const reducer = (a, b) => a + b
    const transformer = filter(isEven)
    expect(transformer(reducer)(0, 1)).toBe(0)
    expect(transformer(reducer)(0, 2)).toBe(2)
  })
})
