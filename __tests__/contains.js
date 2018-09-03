const contains = require('../src/contains')

describe('contains', () => {
  it('should check if an array contains the provided primitive value', () => {
    expect(contains('world', ['hello', 'world'])).toBe(true)
    expect(contains('monde', ['hello', 'world'])).toBe(false)
  })

  it('should return true if an array contains the provided object', () => {
    expect(contains([2], [[1], [2]])).toBe(true)
    expect(contains([3], [[1], [2]])).toBe(false)
    expect(contains({ id: 2 }, [{ id: 1 }, { id: 2 }])).toBe(true)
    expect(contains({ id: 3 }, [{ id: 1 }, { id: 2 }])).toBe(false)
  })

  it('should check if a set contains the provided value', () => {
    expect(contains(2, new Set([1, 2]))).toBe(true)
    expect(contains(3, new Set([1, 2]))).toBe(false)
    expect(
      contains(
        ['hello', 'world'],
        new Set([['bonjour', 'monde'], ['hello', 'world']])
      )
    ).toBe(true)
  })

  it('should check if a map contains a primitive', () => {
    expect(contains('world', new Map([['hello', 'world']]))).toBe(true)
    expect(contains('monde', new Map([['hello', 'world']]))).toBe(false)
  })

  it('should check if a map contains an object', () => {
    expect(
      contains(
        new Map([['hello', 'world']]),
        new Map([['word', new Map([['hello', 'world']])]])
      )
    ).toBe(true)
  })
})
