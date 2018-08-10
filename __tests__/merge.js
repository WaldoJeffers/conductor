const merge = require('../src/merge')

describe('merge', () => {
  it('should merge 2 primitives', () => {
    expect(merge('hello', 42)).toBe(42)
  })

  it('should merge 2 simple arrays', () => {
    expect(merge(['a', 'b'], ['a', 'c'])).toEqual(['a', 'b', 'c'])
  })

  it('should merge 2 nested arrays', () => {
    expect(merge(['a', ['b', 'c']], [['b', 'c'], 'd'])).toEqual([
      'a',
      ['b', 'c'],
      'd',
    ])
  })

  it('should merge 2 objects', () => {
    expect(merge({ a: 1, b: 2 }, { c: 3 })).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should deep merge 2 objects', () => {
    expect(merge({ a: 1, b: { c: 3, d: 4 } }, { b: { e: 5 } })).toEqual({
      a: 1,
      b: {
        c: 3,
        d: 4,
        e: 5,
      },
    })
  })

  it('should deep merge objects containing arrays', () => {
    expect(merge({ a: 1, b: [1, 2] }, { c: 2, b: [3, 4] })).toEqual({
      a: 1,
      b: [1, 2, 3, 4],
      c: 2,
    })
  })

  it('should merge 2 sets', () => {
    expect(merge(new Set([1, 2]), new Set([2, 3]))).toEqual(new Set([1, 2, 3]))
  })

  it('should deep merge 2 sets', () => {
    expect(
      merge(new Set([1, new Set([2, 3])]), new Set([new Set([2, 3]), 4]))
    ).toEqual(new Set([1, new Set([2, 3]), 4]))
  })

  it('should merge 2 maps', () => {
    expect(
      merge(new Map([['hello', 'world']]), new Map([['bonjour', 'monde']]))
    ).toEqual(new Map([['hello', 'world'], ['bonjour', 'monde']]))
  })

  it('should deep merge 2 maps', () => {
    expect(
      merge(
        new Map([['word', new Map([['hello', 'world']])]]),
        new Map([['word', new Map([['bonjour', 'monde']])]])
      )
    ).toEqual(
      new Map([['word', new Map([['hello', 'world'], ['bonjour', 'monde']])]])
    )
  })
})
