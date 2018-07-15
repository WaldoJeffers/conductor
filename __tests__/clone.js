const clone = require('../src/clone')

describe('clone', () => {
  it('should clone variables passed by value', () => {
    expect(clone('hello')).toBe('hello')
    expect(clone(5)).toBe(5)
  })

  it('should clone variables passed by reference', () => {
    const fn = () => 2
    const clonedFn = clone(fn)
    expect(clonedFn).not.toBe(fn)
    //expect(clonedFn).toEqual(fn)

    const date = new Date()
    const clonedDate = clone(date)
    expect(clonedDate).not.toBe(date)
    expect(clonedDate).toEqual(date)

    const object = { hello: 'world' }
    const clonedObject = clone(object)
    expect(clonedObject).not.toBe(object)
    expect(clonedObject).toEqual(object)

    const array = ['hello', 'world']
    const clonedArray = clone(array)
    expect(clonedArray).not.toBe(array)
    expect(clonedArray).toEqual(array)

    const set = new Set(['hello', 'world'])
    const clonedSet = clone(set)
    expect(clonedSet).not.toBe(set)
    expect(clonedSet).toEqual(set)

    const map = new Map([['hello', 'world']])
    const clonedMap = clone(map)
    expect(clonedMap).not.toBe(map)
    expect(clonedMap).toEqual(map)
  })
})
