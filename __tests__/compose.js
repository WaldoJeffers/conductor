const compose = require('../compose')
const delay = require('../delay')

const double = x => 2 * x
const add8 = x => x + 8
const minus4 = x => x - 4

const doubleAsync = x => Promise.resolve(double(x))
const add8Async = x => Promise.resolve(add8(x))
const minus4Async = x => Promise.resolve(minus4(x))

describe('compose', () => {
  it('should compose synchronous functions (right-to-left)', () => {
    expect(compose(minus4, add8, double)(1)).toBe(6)
  })

  it('should compose async functions', async () => {
    await expect(
      compose(minus4Async, delay(100), add8Async, doubleAsync)(1)
    ).resolves.toBe(6)
  })

  it('should compose both sync and async functions', async () => {
    await expect(
      compose(minus4, delay(100), add8, doubleAsync)(1)
    ).resolves.toBe(6)
  })
})
