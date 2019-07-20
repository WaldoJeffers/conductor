const last = require('../src/last')

const object = {hello: 'Bonsoir',world: 'Elliot'}
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)
const string = 'Elliot'

describe('last', () => {
  describe('should return the last item of a collection',  () => {
    it('should return the last item of an array', () => {
      expect(last(array)).toBe(string)
    })

    it('should return the last item of an object', () => {
      expect(last(object)).toBe(string)
    })

    it('should return the last item of a map', () => {
      expect(last(map)).toBe(string)
    })

    it('should return the last item of a set', () => {
      expect(last(set )).toBe(string)
    })

    it('should return the last letter of a string', () => {
      expect(last(string)).toBe('t')
    })
  })
})