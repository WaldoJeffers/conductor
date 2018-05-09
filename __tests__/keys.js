const keys = require('../src/keys')

const object = { word1: 'hello', word2: 'world' }
const array = Object.values(object)
const set = new Set(array)
const map = new Map(Object.entries(object))

describe('keys', () => {
  it('should return the keys of an array', () => {
    expect(keys(array)).toEqual([0, 1])
  })

  it('should return the keys of a set', () => {
    expect(keys(set)).toEqual(['hello', 'world'])
  })

  it('should return the keys of an object', () => {
    expect(keys(object)).toEqual(['word1', 'word2'])
  })

  it('should return the keys of a map', () => {
    expect(keys(map)).toEqual(['word1', 'word2'])
  })
})
