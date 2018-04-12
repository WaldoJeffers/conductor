const entries = require('../src/entries')

const array = [3, 1, 4]
const set = new Set(array)
const object = { hello: 3, world: 1, hey: 4 }
const objectEntries = [['hello', 3], ['world', 1], ['hey', 4]]
const map = new Map(objectEntries)
const arrayEntries = [[0, 3], [1, 1], [2, 4]]
const setEntries = [[3, 3], [1, 1], [4, 4]]

describe('entries', () => {
  it('should return the entries of an array as an array', () => {
    expect(entries(array)).toEqual(arrayEntries)
  })

  it('should return the entries of a set as an array', () => {
    expect(entries(set)).toEqual(setEntries)
  })

  it('should return the entries of an object as an array', () => {
    expect(entries(object)).toEqual(objectEntries)
  })

  it('should return the entries of a map as an array', () => {
    expect(entries(map)).toEqual(objectEntries)
  })
})
