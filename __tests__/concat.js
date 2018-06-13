const concat = require('../src/concat')

describe('concat', () => {
  it('should concatenate two arrays', () => {
    expect(concat([1, 2], [2, 3])).toEqual([1, 2, 2, 3])
  })

  it('should concatenate two strings', () => {
    expect(concat('Bonsoir, ', 'Elliot')).toBe('Bonsoir, Elliot')
  })

  it('should concatenate two objects', () => {
    expect(concat({ word1: 'hello' }, { word2: 'world' })).toEqual({
      word1: 'hello',
      word2: 'world',
    })
  })

  it('should concatenate two sets', () => {
    const a = new Set([1, 2])
    const b = new Set([2, 3])
    expect(concat(a, b)).toEqual(new Set([1, 2, 3]))
  })

  it('should concatenate two maps', () => {
    const a = new Map([['word1', 'hello']])
    const b = new Map([['word2', 'world']])
    expect(concat(a, b)).toEqual(
      new Map([['word1', 'hello'], ['word2', 'world']])
    )
  })
})
