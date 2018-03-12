const filter = require('../src/filter')
const delay = require('../src/delay')
const random = require('../src/random')

const isEven = nb => nb % 2 === 0
const isEvenAsync = nb => Promise.resolve(isEven(nb))
const isEvenRandomSync = nb => (nb % 2 === 0 ? Promise.resolve(true) : false)
const filterWithRandomDelay = nb => delay(random(100, 1000))(nb).then(isEven)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArray = [0, 2, 4, 6, 8]
const object = { drumsticks: 2, cymbals: 3 }
const newObject = { drumsticks: 2 }
const map = new Map(Object.entries(object))
const newMap = new Map(Object.entries(newObject))
const set = new Set(array)
const newSet = new Set(newArray)

describe('filter', () => {
  test('it should filter a collection using a synchronous predicate function', () => {
    expect(filter(isEven, array)).toEqual(newArray)
    expect(filter(isEven, object)).toEqual(newObject)
    expect(filter(isEven, map)).toEqual(newMap)
    expect(filter(isEven, set)).toEqual(newSet)
  })

  test('it should filter a collection using an asynchronous predicate function', async () => {
    await expect(filter(isEvenAsync, array)).resolves.toEqual(newArray)
    await expect(filter(isEvenAsync, object)).resolves.toEqual(newObject)
    await expect(filter(isEvenAsync, set)).resolves.toEqual(newSet)
    await expect(filter(isEvenAsync, map)).resolves.toEqual(newMap)
  })

  test('it should filter a collection using a predicate function which is sometimes synchronous and sometimes asynchronous', async () => {
    await expect(filter(isEvenRandomSync, array)).resolves.toEqual(newArray)
    await expect(filter(isEvenRandomSync, object)).resolves.toEqual(newObject)
    await expect(filter(isEvenRandomSync, set)).resolves.toEqual(newSet)
    await expect(filter(isEvenRandomSync, map)).resolves.toEqual(newMap)
  })

  test('it should filter a collection and keep the same order', async () => {
    await expect(filter(filterWithRandomDelay, array)).resolves.toEqual(
      newArray
    )
    await expect(filter(filterWithRandomDelay, object)).resolves.toEqual(
      newObject
    )
    await expect(filter(filterWithRandomDelay, set)).resolves.toEqual(newSet)
    await expect(filter(filterWithRandomDelay, map)).resolves.toEqual(newMap)
  })
})
