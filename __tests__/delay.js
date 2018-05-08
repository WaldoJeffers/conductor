const delay = require('../src/delay')

describe('delay', () => {
  it('delays the value by the specified duration', async () => {
    const start = Date.now()
    const result = await delay(500, 'hello')
    const end = Date.now()
    const duration = end - start

    expect(result).toBe('hello')
    expect(duration > 450 && duration < 550).toBe(true)
  })

  it('returns a promise', () => {
    expect(delay(0, 'hello')).toBeInstanceOf(Promise)
  })
})
