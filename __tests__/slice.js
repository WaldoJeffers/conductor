const slice = require('../src/slice')

describe('slice', () => {
  it('should retrieve a part of the input array', () => {
    const words = ['Hello', 'Bonsoir', 'Elliot', 'World']
    expect(slice(1, 3, words)).toEqual(['Bonsoir', 'Elliot'])
  })

  it('should be a pure function', () => {
    const words = ['Hello', 'Bonsoir', 'Elliot', 'World']
    expect(slice(1, 3, words)).not.toBe(words)
    expect(words).toEqual(['Hello', 'Bonsoir', 'Elliot', 'World'])
  })
})
