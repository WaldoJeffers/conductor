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

  it('should check if two sets are equal', () => {
    expect(equals(new Set([1, 2]), new Set([1, 2]))).toBe(true)
    expect(equals(new Set([1, 2]), new Set([2, 1]))).toBe(true)
    expect(equals(new Set([1, 2]), new Set([1, 2, 3]))).toBe(false)

    expect(equals(new Set([1, [2, 3]]), new Set([[2, 3], 1]))).toBe(true)
    expect(equals(new Set([1, [2, 3]]), new Set([[2, 3, 4], 1]))).toBe(false)
  })

  it('should check if two objects are equal', () => {
    expect(equals({ hello: 'world' }, { hello: 'world' })).toBe(true)
    expect(equals({ hello: 'world' }, { hello: 'monde' })).toBe(false)

    expect(
      equals(
        { hello: 'world', bonjour: 'monde' },
        { bonjour: 'monde', hello: 'world' }
      )
    ).toBe(true)
    expect(
      equals(
        { hello: 'world', bonjour: 'monde' },
        { bonjour: 'monde', hello: 'world', hola: 'mundo' }
      )
    ).toBe(false)
  })

  it('should check if two maps are equal', () => {
    expect(
      equals(new Map([['hello', 'world']]), new Map([['hello', 'world']]))
    ).toBe(true)
    expect(
      equals(
        new Map([['hello', 'world'], ['bonjour', 'monde']]),
        new Map([['bonjour', 'monde'], ['hello', 'world']])
      )
    ).toBe(true)
    expect(
      equals(
        new Map([['hello', 'world']]),
        new Map([['hello', 'world'], ['bonjour', 'monde']])
      )
    ).toBe(false)
  })
})
