const reject = require('../src/reject')
const delay = require('../src/delay')
const random = require('../src/random')

const isEven = nb => nb % 2 === 0
const isKeyEqualToDrumsticks = (_, key) => key === 'drumsticks'
const isKeyEqualToDrumsticksAsync = (...args) =>
  Promise.resolve(isKeyEqualToDrumsticks(...args))
const isKeyEqualToDrumsticksRandomSync = (_, key) =>
  key === 'drumsticks' ? Promise.resolve(true) : false
const isKeyEven = (_, key) => isEven(key)
const isEvenAsync = nb => Promise.resolve(isEven(nb))
const isKeyEvenAsync = (_, key) => isEvenAsync(key)
const isEvenRandomSync = nb => (isEven(nb) ? Promise.resolve(true) : false)
const isKeyEvenRandomSync = (_, key) => isEvenRandomSync(key)
const rejectWithRandomDelay = nb => delay(random(100, 1000))(nb).then(isEven)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArray = [1, 3, 5, 7, 9]
const object = { drumsticks: 2, cymbals: 3 }
const newObject = { cymbals: 3 }
const map = new Map(Object.entries(object))
const newMap = new Map(Object.entries(newObject))
const set = new Set(array)
const newSet = new Set(newArray)

describe('reject', () => {
  it('should reject items in a collection using a synchronous predicate function', () => {
    expect(reject(isEven, array)).toEqual(newArray)
    expect(reject(isEven, object)).toEqual(newObject)
    expect(reject(isEven, map)).toEqual(newMap)
    expect(reject(isEven, set)).toEqual(newSet)
  })

  it('should reject items in collection using a synchronous predicate function on the key', () => {
    expect(reject(isKeyEven, array)).toEqual(newArray)
    expect(reject(isKeyEven, set)).toEqual(newSet)
    expect(reject(isKeyEqualToDrumsticks, object)).toEqual(newObject)
    expect(reject(isKeyEqualToDrumsticks, map)).toEqual(newMap)
  })

  it('should reject values in a collection using an asynchronous predicate function', async () => {
    await expect(reject(isEvenAsync, array)).resolves.toEqual(newArray)
    await expect(reject(isEvenAsync, object)).resolves.toEqual(newObject)
    await expect(reject(isEvenAsync, set)).resolves.toEqual(newSet)
    await expect(reject(isEvenAsync, map)).resolves.toEqual(newMap)
  })

  it('should reject values in a collection using an asynchronous predicate function on the key', async () => {
    await expect(reject(isKeyEvenAsync, array)).resolves.toEqual(newArray)
    await expect(reject(isKeyEvenAsync, set)).resolves.toEqual(newSet)
    await expect(reject(isKeyEqualToDrumsticksAsync, map)).resolves.toEqual(
      newMap
    )
    await expect(reject(isKeyEqualToDrumsticksAsync, object)).resolves.toEqual(
      newObject
    )
  })

  it('should reject values in a collection using a predicate function which is sometimes synchronous and sometimes asynchronous', async () => {
    await expect(reject(isEvenRandomSync, array)).resolves.toEqual(newArray)
    await expect(reject(isEvenRandomSync, object)).resolves.toEqual(newObject)
    await expect(reject(isEvenRandomSync, set)).resolves.toEqual(newSet)
    await expect(reject(isEvenRandomSync, map)).resolves.toEqual(newMap)
  })

  it('should reject values in a collection using a predicate function on the key which is sometimes synchronous and sometimes asynchronous', async () => {
    await expect(reject(isKeyEvenRandomSync, array)).resolves.toEqual(newArray)
    await expect(reject(isKeyEvenRandomSync, set)).resolves.toEqual(newSet)
    await expect(
      reject(isKeyEqualToDrumsticksRandomSync, object)
    ).resolves.toEqual(newObject)
    await expect(
      reject(isKeyEqualToDrumsticksRandomSync, map)
    ).resolves.toEqual(newMap)
  })

  it('should reject values in a collection and keep the same order', async () => {
    await expect(reject(rejectWithRandomDelay, array)).resolves.toEqual(
      newArray
    )
    await expect(reject(rejectWithRandomDelay, object)).resolves.toEqual(
      newObject
    )
    await expect(reject(rejectWithRandomDelay, set)).resolves.toEqual(newSet)
    await expect(reject(rejectWithRandomDelay, map)).resolves.toEqual(newMap)
  })
})
