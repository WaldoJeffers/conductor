const equal = require('../src/equal')

describe('equal', () => {
  it('should return true if two items are equal', () => {
    expect(equal('hello', 'hello')).toBe(true)
    expect(equal('hello', 'world')).toBe(false)
  })

  it('should work on primary data types', () => {
    expect(equal('hello', 'hello')).toBe(true)
    expect(equal(2, 2)).toBe(true)
    expect(equal(true, true)).toBe(true)
  })

  it('should work on complex data types', () => {
    expect(equal(['hello', 'world'], ['hello', 'world'])).toBe(true)
    expect(equal({ hello: 'world' }, { hello: 'world' })).toBe(true)
    expect(
      equal(
        new Date('2018-03-25T00:00:00.000Z'),
        new Date('2018-03-25T00:00:00.000Z')
      )
    ).toBe(true)
  })
})
