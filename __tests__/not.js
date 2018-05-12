const not = require('../src/not')

describe('not', () => {
  it('should return the logical negation of a value', () => {
    expect(not(true)).toBe(false)
    expect(not(false)).toBe(true)
    expect(not(null)).toBe(true)
    expect(not(undefined)).toBe(true)
  })
})
