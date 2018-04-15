const findIndex = require('../src/findIndex')

const luke = {
  id: 1,
  firstname: 'Luke',
}
const han = {
  id: 2,
  firstname: 'Han',
}
const characterObj = { luke, han }
const characterArray = [luke, han]

describe('findIndex', () => {
  it('should return the first item of an array which matches the provided predicate function', () => {
    expect(findIndex(({ id }) => id === 1, characterArray)).toBe(0)
  })

  it('should return a value indicating the item was not found', () => {
    expect(findIndex(({ id }) => id === 3, characterArray)).toBe(-1)
  })

  it('should work if the predicate is asynchronous', async () => {
    await expect(
      findIndex(({ id }) => Promise.resolve(id === 2), characterArray)
    ).resolves.toBe(1)
  })

  it.skip('should work on objects', () => {
    expect(findIndex(({ id }) => id === 1, characterObj)).toBe('luke')
  })

  it.skip('should work on sets', () => {
    expect(findIndex(({ id }) => id === 1, characterObj)).toBe('luke')
  })

  it.skip('should work on objects', () => {
    expect(findIndex(({ id }) => id === 1, characterObj)).toBe('luke')
  })
})
