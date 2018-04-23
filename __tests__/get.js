const get = require('../src/get')

const object = {
  hello: 'world',
  use: 'drumsticks',
}
const array = Object.values(object)
const map = new Map(Object.entries(object))
const set = new Set(array)

describe('get', () => {
  it('should retrieve an element by its key', () => {
    expect(get('use', object)).toBe('drumsticks')
    expect(get('use', map)).toBe('drumsticks')
    expect(get(1, array)).toBe('drumsticks')
    expect(get('drumsticks', set)).toBe('drumsticks')
  })

  it('should be curried', () => {
    expect(get('use')(object)).toBe('drumsticks')
    expect(get('use')(map)).toBe('drumsticks')
    expect(get(1)(array)).toBe('drumsticks')
    expect(get('drumsticks')(set)).toBe('drumsticks')
  })

  it('should return null when item does not exist', () => {
    expect(get('unknown', object)).toBe(undefined)
    expect(get('unknown', array)).toBe(undefined)
    expect(get('unknown', map)).toBe(undefined)
    expect(get('unknown', set)).toBe(undefined)
  })
})
