const upsert = require('../src/upsert')

const luke = { id: 1, firstname: 'Luke' }
const han = { id: 2, firstname: 'Han' }

describe('upsert', () => {
  it('should append an item to a collection which does not contain it', () => {
    expect(upsert(({ id }) => id === 2, han, [luke])).toEqual([luke, han])
  })

  it('should replace an item to a collection which does not contain it', () => {
    expect(
      upsert(({ id }) => id === 2, han, [
        luke,
        { id: 2, firstname: 'Chewbacca' },
      ])
    ).toEqual([luke, han])
  })
})
