const forEach = require('../src/forEach')
const numbers = [3, 1, 4]
const set = new Set(numbers)
const object = { drummer: 1, drumsticks: 2 }
const map = new Map(Object.entries(object))

describe('forEach', () => {
  it('should call the provided function for each item in a collection', () => {
    const spy = jest.fn()
    forEach(spy, numbers)
    numbers.forEach(expect(spy).toHaveBeenCalledWith)
  })

  it('should work on sets', () => {
    const spy = jest.fn()
    forEach(spy, set)
    numbers.forEach(item => expect(spy).toHaveBeenCalledWith(item, item, set))
  })

  it('should work on objects', () => {
    const spy = jest.fn()
    forEach(spy, object)
    Object.entries(object).forEach(([key, value]) =>
      expect(spy).toHaveBeenCalledWith(value, key, object)
    )
  })

  it('should work on maps', () => {
    const spy = jest.fn()
    forEach(spy, map)
    map.forEach(expect(spy).toHaveBeenCalledWith)
  })
})
