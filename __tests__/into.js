const into = require('../src/into')
const map = require('../src/transformers/map')
const double = x => 2 * x

describe('into', () => {
  it('should transform an array into an array using the provided transformer', () => {
    expect(into([], map(double), [3, 1, 4])).toEqual([6, 2, 8])
  })

  it('should transform an array into a set using the provided transformer', () => {
    expect(into(new Set(), map(double), [3, 1, 4])).toEqual(new Set([6, 2, 8]))
  })

  it('should transform an array into an object using the provided transformer', () => {
    expect(into({}, map(double), [3, 1, 4])).toEqual({
      0: 6,
      1: 2,
      2: 8,
    })
  })

  it('should transform an array into a map using the provided transformer', () => {
    expect(into(new Map(), map(double), [3, 1, 4])).toEqual(
      new Map([[0, 6], [1, 2], [2, 8]])
    )
  })

  it('should transform a set into an array using the provided transformer', () => {
    expect(into([], map(double), new Set([3, 1, 4]))).toEqual([6, 2, 8])
  })

  it('should transform a set into an array using the provided transformer', () => {
    expect(into(new Set(), map(double), new Set([3, 1, 4]))).toEqual(
      new Set([6, 2, 8])
    )
  })

  it('should transform a set into an object using the provided transformer', () => {
    expect(into({}, map(double), new Set([3, 1, 4]))).toEqual({
      // key = value for sets
      3: 6,
      1: 2,
      4: 8,
    })
  })

  it('should transform a set into a map using the provided transformer', () => {
    expect(into(new Map(), map(double), new Set([3, 1, 4]))).toEqual(
      new Map([[3, 6], [1, 2], [4, 8]])
    )
  })

  it('should transform a map into an array using the provided transformer', () => {
    expect(into([], map(double), new Map([['drumsticks', 1]]))).toEqual([2])
  })

  it('should transform a map into a set using the provided transformer', () => {
    expect(into(new Set(), map(double), new Map([['drumsticks', 1]]))).toEqual(
      new Set([2])
    )
  })

  it('should transform a map into an object using the provided transformer', () => {
    expect(into({}, map(double), new Map([['drumsticks', 1]]))).toEqual({
      drumsticks: 2,
    })
  })

  it('should transform a map into a map using the provided transformer', () => {
    expect(into(new Map(), map(double), new Map([['drumsticks', 1]]))).toEqual(
      new Map([['drumsticks', 2]])
    )
  })

  it('should transform an object into an array using the provided transformer', () => {
    expect(into([], map(double), { drumsticks: 1 })).toEqual([2])
  })

  it('should transform an object into a set using the provided transformer', () => {
    expect(into(new Set(), map(double), { drumsticks: 1 })).toEqual(
      new Set([2])
    )
  })

  it('should transform an object into an object using the provided transformer', () => {
    expect(into({}, map(double), { drumsticks: 1 })).toEqual({ drumsticks: 2 })
  })

  it('should transform an object into a map using the provided transformer', () => {
    expect(into(new Map(), map(double), { drumsticks: 1 })).toEqual(
      new Map([['drumsticks', 2]])
    )
  })
})
