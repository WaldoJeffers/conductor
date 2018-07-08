const split = require('../src/split')

const input = 'Bonsoir, Elliot'
const output = input.split(', ')

describe('split', () => {
  it('should split a string using a string pattern', () => {
    expect(split(', ', input)).toEqual(output)
  })

  it('should split a string using a regular expression', () => {
    expect(split(/,\s/, input)).toEqual(output)
  })

  it('should be curried', () => {
    expect(split(', ')(input)).toEqual(output)
  })
})
