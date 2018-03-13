const get = require('../src/get')

const object = {
  hello: 'world',
  use: 'drumsticks',
}
const array = Object.values(object)
const map = new Map(Object.entries(object))

describe('get', () => {
  it('should retrieve an element by its key', () => {
    expect(get('use', object)).toBe('drumsticks')
    expect(get('use', map)).toBe('drumsticks')
    expect(get(1, array)).toBe('drumsticks')
  })

  it.only('should be curried', () => {
    expect(get('use')(object)).toBe('drumsticks')
    expect(get('use')(map)).toBe('drumsticks')
    expect(get(1)(array)).toBe('drumsticks')
  })
})
