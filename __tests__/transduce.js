const transduce = require('../src/transduce')

describe('transduce', () => {
  it('should transduce an input collection using the provided transformer and reducer', () => {
    const characters = [
      { name: 'Luke', side: 'light' },
      { name: 'Han', side: 'light' },
      { name: 'Darth Vader', side: 'dark' },
    ]
    const concatNames = (acc, name) => {
      acc.push(name)
      return acc
    }
    const retrieveGoodGuysName = reducer => (acc, character) =>
      character.side === 'light' ? reducer(acc, character.name) : acc
    const seed = []
    expect(
      transduce(retrieveGoodGuysName, concatNames, seed, characters)
    ).toEqual(['Luke', 'Han'])
  })
})
