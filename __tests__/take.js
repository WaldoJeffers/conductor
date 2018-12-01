const take = require('../src/take')

describe('take', () => {
  it('should only keep the first N elements of the elements', () => {
    expect(take(2, [1, 2, 3])).toEqual([1, 2])
  })

  it('should work backwards if N is negative', () => {
    expect(take(-2, [1, 2, 3])).toEqual([2, 3])
  })

  it('should return a copy the entire array if N is greather than the array\'s length', () => {
    expect(take(100, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('should be a pure function', () => {
    const input = [1, 2, 3]
    const output = take(3, input)
    expect(input).toEqual([1, 2, 3])
    expect(output).not.toBe(input)
  })
})
