const pluck = require('../src/pluck')

const object = {
  first: { instrument: 'drums' },
  second: { instrument: 'tenor' },
  third: { instrument: 'baritone' },
}
const array = Object.values(object)
const map = new Map(Object.entries(object))
const set = new Set(array)

describe('pluck', () => {
  it('should flatten a collection by using get', () => {
    expect(pluck('instrument', object)).toEqual({
      first: 'drums',
      second: 'tenor',
      third: 'baritone',
    })
    expect(pluck('instrument', array)).toEqual(['drums', 'tenor', 'baritone'])
    expect(pluck('instrument', map)).toEqual(
      new Map([['first', 'drums'], ['second', 'tenor'], ['third', 'baritone']])
    )
    expect(pluck('instrument', set)).toEqual(
      new Set(['drums', 'tenor', 'baritone'])
    )
  })
})
