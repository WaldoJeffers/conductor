const join = require('../src/join')

const object = { word1: 'Bonsoir', word2: 'Elliot' }
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)

describe('join', () => {
  it('should concat an array\'s values using the separator', () => {
    expect(join(', ', array)).toBe('Bonsoir, Elliot')
  })

  it('should concat a set\'s values using the separator', () => {
    expect(join(', ', set)).toBe('Bonsoir, Elliot')
  })

  it('should concat an object\'s values using the separator', () => {
    expect(join(', ', object)).toBe('Bonsoir, Elliot')
  })

  it('should concat a map\'s values using the separator', () => {
    expect(join(', ', object)).toBe('Bonsoir, Elliot')
  })
})
