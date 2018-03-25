const prepend = require('../src/prepend')

describe('prepend', () => {
  it('should add an element at the beginning of an array', () => {
    expect(prepend('hello', ['world'])).toEqual(['hello', 'world'])
  })

  it('should be a pure function', () => {
    const input = ['world']
    const output = prepend('hello', input)
    expect(input).toEqual(['world'])
    expect(output).not.toBe(input)
  })
})
