const get = require('../src/get')
const mergeBy = require('../src/mergeBy')

const arr1 = [{ id: 1, name: 'Anakin', age: 10 }]
const arr2 = [
  {
    id: 1,
    name: 'Darth Vader',
    side: 'dark',
  },
]

describe('mergeBy', () => {
  it('should accept a string indicating which prop is used for equality checks for collections', () => {
    expect(mergeBy('id', arr1, arr2)).toEqual([
      { id: 1, name: 'Darth Vader', age: 10, side: 'dark' },
    ])
    expect(mergeBy('name', arr1, arr2)).toEqual([
      { id: 1, name: 'Anakin', age: 10 },
      { id: 1, name: 'Darth Vader', side: 'dark' },
    ])
  })

  it('should accept a predicate checking for equality in collections', () => {
    expect(mergeBy(get('id'), arr1, arr2)).toEqual([
      { id: 1, name: 'Darth Vader', age: 10, side: 'dark' },
    ])
    expect(mergeBy(get('name'), arr1, arr2)).toEqual([
      { id: 1, name: 'Anakin', age: 10 },
      { id: 1, name: 'Darth Vader', side: 'dark' },
    ])
  })

  it('should only use the predicate for the first level', () => {
    const deep_array1 = [
      {
        id: 1,
        name: 'Anakin',
        age: 10,
        weapons: [{ id: 1, name: 'blaster' }],
      },
    ]
    const deep_array2 = [
      {
        id: 1,
        name: 'Darth Vader',
        side: 'dark',
        weapons: [{ id: 1, name: 'lightsaber' }],
      },
    ]

    expect(mergeBy('id', deep_array1, deep_array2)).toEqual([
      {
        id: 1,
        age: 10,
        name: 'Darth Vader',
        side: 'dark',
        weapons: [{ id: 1, name: 'blaster' }, { id: 1, name: 'lightsaber' }],
      },
    ])
  })
})
