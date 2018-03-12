const identity = require('../src/identity')

describe('identity', () => {
  it('should return the first passed parameter', () => {
    const values = [2, 'drumsticks', new Date(), () => 'world', {}]
    expect(values.map(identity)).toEqual(values)
  })
})
