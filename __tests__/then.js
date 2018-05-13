const then = require('../src/then')
const type = require('../src/type')

const double = x => 2 * x
const asyncDouble = async x => double(x)

describe('then', () => {
  it('should call synchronously the function with the provided value if it\'s not a Promise', () => {
    expect(then(double, 2)).toBe(4)
  })

  it('should return a promise if the input value is a Promise', () => {
    expect(then(double, Promise.resolve(2))).toBeInstanceOf(Promise)
  })

  it('should return a promise if the function is asynchronous', () => {
    // toBeInstanceOf(Promise) does not work for async fns in Jest 22
    expect(type(then(asyncDouble, 2))).toBe('promise')
  })

  it('should call the function when the Promise\'s resolved', async () => {
    await expect(then(double, Promise.resolve(2))).resolves.toBe(4)
  })
})
