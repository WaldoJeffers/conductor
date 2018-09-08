const equalsBy = require('../src/equalsBy')

describe('equalsBy', () => {
  it('should check for equality between two objects using the provided key', () => {
    const obj1 = { id: 1, name: 'Anakin' }
    const obj2 = { id: 1, name: 'Darth Vader' }
    expect(equalsBy('id', obj1, obj2)).toBe(true)
    expect(equalsBy('name', obj1, obj2)).toBe(false)
  })

  it('should check for equality between two elements using the provided function', () => {
    const mod2 = x => x % 2
    expect(equalsBy(mod2, 2, 4)).toBe(true)
    expect(equalsBy(mod2, 2, 3)).toBe(false)
  })

  it('should be curried', () => {
    const mod2 = x => x % 2
    expect(equalsBy(mod2, 2)(4)).toBe(true)
    expect(equalsBy(mod2)(2)(4)).toBe(true)
  })
})
