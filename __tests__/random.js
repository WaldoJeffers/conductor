const random = require('../src/random')

describe('random', () => {
  it('should return a random integer between the provided lower and upper bounds', () => {
    expect(random(1, 10)).toBeGreaterThanOrEqual(1)
    expect(random(1, 10)).toBeLessThanOrEqual(10)
  })
})
