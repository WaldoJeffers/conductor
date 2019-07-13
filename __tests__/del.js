const del = require('../src/del')

const object = { three: 3, one: 1, four: 4 }
const newObject = { three: 3, four: 4 }

const array = Object.values(object)
const newArray = Object.values(newObject)

const set = new Set(array)
const newSet = new Set(newArray)

const map = new Map(Object.entries(object))
const newMap = new Map(Object.entries(newObject))

describe('del', () => {
  describe('it should delete an existing item in a collection', () => {
    it('should delete an item from an array by its key', () => {
      expect(del(1, array)).toEqual(newArray)
    })

    it('should delete an item from a set by its key', () => {
      expect(del(1, set)).toEqual(newSet)
    })

    it('should delete an item from an object by its key', () => {
      expect(del('one', object)).toEqual(newObject)
    })

    it('should object an item from a map by its key', () => {
      expect(del('one', map)).toEqual(newMap)
    })
  })

  describe('it should not delete a non existing item in a collection', () => {
    it('should not delete an item from an array by its key', () => {
      expect(del(6, array)).toEqual(array)
    })

    it('should not delete an item from a set by its key', () => {
      expect(del(6, set)).toEqual(set)
    })

    it('should not delete an item from an object by its key', () => {
      expect(del('two', object)).toEqual(object)
    })

    it('should object an item from a map by its key', () => {
      expect(del('two', map)).toEqual(map)
    })
  })
})
