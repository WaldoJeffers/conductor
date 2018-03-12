const delay = require('../src/delay')
const reduce = require('../src/reduce')

const add = (a, b) => a + b
const numbers = [3, 1, 4, 1, 5]
const addWithDelay = duration => (a, b) => delay(duration)(add(a, b))
const addWithRandomDelay = duration => (a, b) =>
  Math.round(Math.random()) % 2 === 0 ? add(a, b) : delay(duration)(add(a, b))

describe('reduce', () => {
  it('should reduce a collection using the provided reducer', () => {
    expect(reduce(add, 0, numbers)).toBe(14)
  })

  it('should work with an async reducer', async () => {
    await expect(reduce(addWithDelay(1), 0, numbers)).resolves.toBe(14)
  })

  it('should work with a reducer returning both awaitable & non-awaitable values', async () => {
    await expect(reduce(addWithRandomDelay(1), 0, numbers)).resolves.toBe(14)
  })
})
