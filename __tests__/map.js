const map = require('../map')
const delay = require('../delay')

describe('map', () => {
  it('should map over a collection using a mapper', () => {
    const collection = [3, 1, 4]
    expect(map(x => 2 * x, collection)).toEqual([6, 2, 8])
  })

  it('should map over a collection using an async mapper', async () => {
    const collection = [3, 1, 4]
    await expect(map(delay(1000), collection)).resolves.toEqual([3, 1, 4])
  })
})
