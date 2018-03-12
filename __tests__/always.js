const always = require('../src/always')

describe('always', () => {
  it('should create a function which always returns the same value', () => {
    const values = [2, 'drummer', { hello: 'word' }, new Date()]
    expect(values.map(always).map(fn => fn())).toEqual(values)
  })
})
