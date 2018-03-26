const upsert = require('../src/upsert')

const luke = { id: 1, firstname: 'Luke' }
const han = { id: 2, firstname: 'Han' }

describe('upsert', () => {
  it('should append an item to a collection which does not contain it', () => {
    expect(upsert(({ id }) => id === 2, han, [luke])).toEqual([luke, han])
  })

  it('should replace an item in a collection which contains it', () => {
    expect(
      upsert(({ id }) => id === 2, han, [
        luke,
        { id: 2, firstname: 'Chewbacca' },
      ])
    ).toEqual([luke, han])
  })

  it('should be a pure function', () => {
    const input = [luke]
    const output = upsert(({ id }) => id === 2, han, input)
    expect(input).toEqual([luke])
    expect(output).not.toBe(input)
  })
})
