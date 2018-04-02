const { performance } = require('perf_hooks')
const delay = require('../src/delay')

describe('delay', () => {
  it('delays the value by the specified duration', async () => {
    performance.mark('delay start')
    const result = await delay(500, 'hello')
    performance.mark('delay end')
    performance.measure('delay start to end', 'delay start', 'delay end')
    const measure = performance.getEntriesByName('delay start to end')[0]

    expect(result).toBe('hello')
    expect(measure.duration > 450 && measure.duration < 550).toBe(true)
  })

  it('returns a promise', () => {
    expect(delay(0, 'hello')).toBeInstanceOf(Promise)
  })
})
