const toLowerCase = require('../src/toLowerCase')

describe('toLowerCase', () => {
  it('should convert a string to lowercase', () => {
    expect(toLowerCase('HeLlO')).toBe('hello')
  })
})
