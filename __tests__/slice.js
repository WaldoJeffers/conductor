const slice = require('../src/slice')

const object = {
  'hello': 'Hello',
  'bonsoir': 'Bonsoir',
  'elliott': 'Elliot',
  'world': 'World',
}
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)
const newObject = { bonsoir: 'Bonsoir', elliott: 'Elliot' }
const newMap = new Map(Object.entries(newObject))
const newArray = Object.values(newObject)
const newSet = new Set(newArray)


describe('slice', () => {
  describe('it should retrieve a slice of the input collection', () => {
    it('should retrieve a slice of the input array', () => {
      expect(slice(1, 3, array)).toEqual(newArray)
    })

    it('should retrieve a slice of the input set', () => {
      expect(slice(1, 3, set)).toEqual(newSet)
    })

    it('should retrieve a slice of the input map', () => {
      expect(slice(1, 3, map)).toEqual(newMap)
    })

    it('should retrieve a slice of the input object', () => {
      expect(slice(1, 3, object)).toEqual(newObject)
    })
  })

  describe('it should start from the end if the first parameter is negative', () => {
    it('should retrieve a slice of the input array', () => {
      expect(slice(-3, 3, array)).toEqual(newArray)
    })

    it('should retrieve a slice of the input set', () => {
      expect(slice(-3, 3, set)).toEqual(newSet)
    })

    it('should retrieve a slice of the input map', () => {
      expect(slice(-3, 3, map)).toEqual(newMap)
    })

    it('should retrieve a slice of the input object', () => {
      expect(slice(-3, 3, object)).toEqual(newObject)
    })
  })

  describe('it should start from the end if the second parameter is negative', () => {
    it('should retrieve a slice of the input array', () => {
      expect(slice(1, -1, array)).toEqual(newArray)
    })

    it('should retrieve a slice of the input set', () => {
      expect(slice(1, -1, set)).toEqual(newSet)
    })

    it('should retrieve a slice of the input map', () => {
      expect(slice(1, -1, map)).toEqual(newMap)
    })

    it('should retrieve a slice of the input object', () => {
      expect(slice(1, -1, object)).toEqual(newObject)
    })
  })

  describe('it should work if both start and end are negative', () => {
    it('should retrieve a slice of the input array', () => {
      expect(slice(-3, -1, array)).toEqual(newArray)
    })

    it('should retrieve a slice of the input set', () => {
      expect(slice(-3, -1, set)).toEqual(newSet)
    })

    it('should retrieve a slice of the input map', () => {
      expect(slice(-3, -1, map)).toEqual(newMap)
    })

    it('should retrieve a slice of the input object', () => {
      expect(slice(-3, -1, object)).toEqual(newObject)
    })
  })

  describe('it should return an empty collection if no results are found', () => {
    it('should retrieve a slice of the input array', () => {
      expect(slice(-3, 1, array)).toEqual([])
    })

    it('should retrieve a slice of the input set', () => {
      expect(slice(-3, 1, set)).toEqual(new Set())
    })

    it('should retrieve a slice of the input map', () => {
      expect(slice(-3, 1, map)).toEqual(new Map([]))
    })

    it('should retrieve a slice of the input object', () => {
      expect(slice(-3, 1, object)).toEqual({})
    })
  })

  it('should be a pure function', () => {
    const words = ['Hello', 'Bonsoir', 'Elliot', 'World']
    expect(slice(1, 3, words)).not.toBe(words)
    expect(words).toEqual(['Hello', 'Bonsoir', 'Elliot', 'World'])
  })
})
