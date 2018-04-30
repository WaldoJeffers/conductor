const ifElse = require('../src/ifElse')

describe('ifElse', () => {
  it('should evaluate the predicate and execute the first branch if the predicate is true', () => {
    expect(ifElse(x => x, () => 'hello')(true)).toBe('hello')
  })

  it('should evaluate the predicate and execute the second branch if the predicate is false', () => {
    expect(ifElse(x => x, () => 'hello', () => 'world')(false)).toBe('world')
  })

  it('should pass all the input parameters to the predicate and the branches', () => {
    const truePredicate = jest.fn(() => true)
    const falsePredicate = jest.fn(() => false)
    const firstBranch = jest.fn()
    const secondBranch = jest.fn()

    ifElse(truePredicate, firstBranch, secondBranch)('hello', 2, 'drumsticks')
    expect(truePredicate).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(firstBranch).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(secondBranch).not.toHaveBeenCalled()

    firstBranch.mockReset()
    ifElse(falsePredicate, firstBranch, secondBranch)('hello', 2, 'drumsticks')
    expect(falsePredicate).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(secondBranch).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(firstBranch).not.toHaveBeenCalled()
  })

  it('should pass all the input parameters to the predicate and the branches', () => {
    const truePredicate = jest.fn(() => true)
    const falsePredicate = jest.fn(() => false)
    const firstBranch = jest.fn()
    const secondBranch = jest.fn()

    ifElse(truePredicate, firstBranch, secondBranch)('hello', 2, 'drumsticks')
    expect(truePredicate).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(firstBranch).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(secondBranch).not.toHaveBeenCalled()

    firstBranch.mockReset()
    ifElse(falsePredicate, firstBranch, secondBranch)('hello', 2, 'drumsticks')
    expect(falsePredicate).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(secondBranch).toHaveBeenCalledWith('hello', 2, 'drumsticks')
    expect(firstBranch).not.toHaveBeenCalled()
  })

  it('should use identity if no branch function is provided', () => {
    expect(ifElse(() => true)(2)).toBe(2)
    expect(ifElse(() => false)(2)).toBe(2)
    expect(ifElse(() => false, () => 2)(3)).toBe(3)
  })

  it('should return an asynchronous function if the predicate is asynchronous', () => {
    expect(ifElse(async () => true)(2)).toBeInstanceOf(Promise)
  })

  it('should work with an asynchronous function if the predicate is asynchronous', async () => {
    await expect(ifElse(async () => true, () => 2, () => 3)()).resolves.toBe(2)
    await expect(ifElse(async () => false, () => 2, () => 3)()).resolves.toBe(3)
  })
})
