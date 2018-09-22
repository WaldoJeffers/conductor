const equalsBy = require('../src/equalsBy')
const get = require('../src/get')

const obj1 = {
  id: 1,
  name: 'Anakin',
  weapons: [{ name: 'lightsaber' }],
  vehicles: [{ name: 'podracer' }],
}
const obj2 = {
  id: 1,
  name: 'Darth Vader',
  weapons: [{ name: 'lightsaber' }],
  vehicles: [{ name: 'x-tie' }],
}

describe('equalsBy', () => {
  it('should check for equality between two objects using the provided key', () => {
    expect(equalsBy('id', obj1, obj2)).toBe(true)
    expect(equalsBy('name', obj1, obj2)).toBe(false)
  })

  it('should accept a function as a getter for the value used to check equality', () => {
    expect(equalsBy(get('id'), obj1, obj2)).toBe(true)
    expect(equalsBy(get('name'), obj1, obj2)).toBe(false)
  })

  it('should use equals internally to compare objects', () => {
    expect(equalsBy('weapons', obj1, obj2)).toBe(true)
    expect(equalsBy('vehicles', obj1, obj2)).toBe(false)
  })

  it('should be curried', () => {
    const mod2 = x => x % 2
    expect(equalsBy(mod2, 2)(4)).toBe(true)
    expect(equalsBy(mod2)(2)(4)).toBe(true)
  })
})
