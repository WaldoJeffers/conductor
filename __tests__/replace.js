const replace = require('../src/replace')

describe('replace', () => {
  it('should replace the item at the given index', () => {
    expect(replace(1, 'world', ['hello', 'earth'])).toEqual(['hello', 'world'])
  })

  it('should be a pure function', () => {
    const input = ['hello', 'earth']
    const output = replace(1, 'world', input)
    expect(input).toEqual(['hello', 'earth'])
    expect(output).not.toBe(input)
  })
})
