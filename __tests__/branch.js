const branch = require('../src/branch')

const add5 = x => x + 5
const times2 = x => 2 * x
const divide3 = x => x / 3

describe('branch', () => {
  it('should return a function', () => {
    expect(branch(add5, times2, divide3)).toBeInstanceOf(Function)
  })

  it('should create branches and return an array where each item is the result of the branch', () => {
    expect(branch(add5, times2, divide3)(6)).toEqual([11, 12, 2])
  })
})
