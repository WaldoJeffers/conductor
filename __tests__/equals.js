const equals = require('../src/equals')

describe('equals', () => {
  it('should return true if two items are equals', () => {
    expect(equals('hello', 'hello')).toBe(true)
    expect(equals('hello', 'world')).toBe(false)
  })

  it('should work on primary data types', () => {
    expect(equals('hello', 'hello')).toBe(true)
    expect(equals(2, 2)).toBe(true)
    expect(equals(true, true)).toBe(true)
  })

  it('should work on complex data types', () => {
    expect(equals(['hello', 'world'], ['hello', 'world'])).toBe(true)
    expect(equals({ hello: 'world' }, { hello: 'world' })).toBe(true)
    expect(
      equals(
        new Date('2018-03-25T00:00:00.000Z'),
        new Date('2018-03-25T00:00:00.000Z')
      )
    ).toBe(true)
  })
})
