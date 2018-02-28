const capitalize = require('../capitalize')

describe('capitalize', () => {
  it('should capitalize the string\'s first letter', () => {
    expect(capitalize('beat the devil\'s tatoo')).toBe('Beat the devil\'s tatoo')
  })
})
