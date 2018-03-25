const append = require('../src/append')

describe('append', () => {
  it('should add an element at the end of an array', () => {
    expect(append('world', ['hello'])).toEqual(['hello', 'world'])
  })

  it('should be a pure function', () => {
    const input = ['hello']
    const output = append('world', input)
    expect(input).toEqual(['hello'])
    expect(output).not.toBe(input)
  })
})
