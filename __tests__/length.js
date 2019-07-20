const length = require('../src/length')

const string = 'hello'
const object = {hello: 'world', bonsoir: 'Elliot'}
const map = new Map(Object.entries(object))
const array = Object.values(object)
const set = new Set(array)
const fn = (a,b,c) => a + b + c


describe('length', () => {
  describe('should return the length of a non-empty collection', () => {
    it('should return the length of a string', () => {
      expect(length(string)).toBe(5)
    })

    it('should return the length of an object', () =>{
      expect(length(object)).toBe(2)
    })

    it('should return the length of a map', () => {
      expect(length(map)).toBe(2)
    })

    it('should return the length of a set', () => {
      expect(length(set)).toBe(2)
    })

    it('should return the length of an array', () => {
      expect(length(array)).toBe(2)
    })

    it('should return the length of a function', () => {
      expect(length(fn)).toBe(3)
    })
  })
})