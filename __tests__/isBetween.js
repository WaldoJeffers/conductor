const isBetween = require('../src/isBetween')

describe('isBetween', () => {
  it('should check if a number is included in an interval', () => {
    expect(isBetween(2, 4, 3)).toBe(true)
    expect(isBetween(7, 11, 5)).toBe(false)
  })
})