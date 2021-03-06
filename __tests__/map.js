const map = require('../src/map')
const delay = require('../src/delay')
const random = require('../src/random')
const compose = require('../src/compose')
const randomDelay = x => delay(random(10, 500))(x)

const mapper = x => 2 * x
const asyncMapper = async x => mapper(x)
const asyncMapperWithRandomDelay = compose(randomDelay, asyncMapper)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

const hashmap = new Map([['drumsticks', 2], ['cymbals', 3]])
const newMap = new Map([['drumsticks', 4], ['cymbals', 6]])

const object = { drumsticks: 2, cymbals: 3 }
const newObject = { drumsticks: 4, cymbals: 6 }
const set = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
const newSet = new Set([0, 2, 4, 6, 8, 10, 12, 14, 16, 18])

describe('map', () => {
  it('should map over an array using a mapper', () => {
    expect(map(mapper, array)).toEqual(newArray)
  })

  it('should map over an object using the provided mapper', () => {
    expect(map(mapper, object)).toEqual(newObject)
  })

  it('should map over a map using the provided mapper', () => {
    expect(map(mapper, hashmap)).toEqual(newMap)
  })

  it('should map over a map using the provided mapper', () => {
    expect(map(mapper, set)).toEqual(newSet)
  })

  it('should support partial application', () => {
    expect(map(mapper)(array)).toEqual(newArray)
  })

  it('should map over an array using an asynchronous mapper', async () => {
    await expect(map(asyncMapper, array)).resolves.toEqual(newArray)
  })

  it('should preserve order when using an asynchronous mapper', async () => {
    await expect(map(asyncMapperWithRandomDelay, array)).resolves.toEqual(
      newArray
    )
    await expect(map(asyncMapperWithRandomDelay, object)).resolves.toEqual(
      newObject
    )
    await expect(map(asyncMapperWithRandomDelay, hashmap)).resolves.toEqual(
      newMap
    )
    await expect(map(asyncMapperWithRandomDelay, set)).resolves.toEqual(newSet)
  })
})
