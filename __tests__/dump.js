const dump = require('../src/dump')
const map = require('../src/transformers/map')

const times2 = map(x => 2 * x)
const inputObject = { hello: 3, world: 1, hey: 4 }
const inputMap = new Map(Object.entries(inputObject))
const inputArray = Object.values(inputObject)
const inputSet = new Set(inputArray)
const outputObject = { hello: 6, world: 2, hey: 8 }
const outputMap = new Map(Object.entries(outputObject))
const outputArray = Object.values(outputObject)
const outputSet = new Set(outputArray)

describe('dump', () => {
  it('should transform an array into a new array of the same type using the provided transformer', () => {
    expect(dump(times2, inputArray)).toEqual([6, 2, 8])
  })

  it('should transform a set into a new set using the provided transformer', () => {
    expect(dump(times2, inputSet)).toEqual(outputSet)
  })

  it('should transform an object into a new object using the provided transformer', () => {
    expect(dump(times2, inputObject)).toEqual(outputObject)
  })

  it('should transform a map into a new map using the provided transformer', () => {
    expect(dump(times2, inputMap)).toEqual(outputMap)
  })
})
