const curryN = require('../curryN')
const add = curryN(3, (a, b, c) => a + b + c)

describe('curry', () => {
  it('should curry the input function', () => {
    expect(add(1, 2, 3)).toBe(6)
    expect(add(1)(2)(3)).toBe(6)
    expect(add(1, 2)(3)).toBe(6)
    expect(add(1)(2, 3)).toBe(6)
  })

  it('should preserve the function\'s arity', () => {
    expect(add.length).toBe(3)
    expect(add(1).length).toBe(2)
    expect(add(1, 2).length).toBe(1)
    expect(add(1)(2).length).toBe(1)
    expect(add(1)(2).length).toBe(1)
  })
})
