const values = require('../src/values')

const object = { word1: 'Bonsoir', word2: 'Elliot' }
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)
const output = ['Bonsoir', 'Elliot']

describe('values', () => {
  it('should return an object\'s values as an array', () => {
    expect(values(object)).toEqual(output)
  })

  it('should return a map\'s values as an array', () => {
    expect(values(map)).toEqual(output)
  })

  it('should return an array\'s values as an array', () => {
    expect(values(array)).toEqual(output)
  })

  it('should return a set\'s values as an array', () => {
    expect(values(set)).toEqual(output)
  })
})
