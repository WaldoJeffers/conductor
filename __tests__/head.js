const head = require('../src/head')

const object = {
  role: 'drummer',
  firstname: 'James',
  lastname: 'M',
}
const array = Object.values(object)
const set = new Set(array)
const map = new Map(Object.entries(object))

describe('head', () => {
  it('should return the collection\'s first element', () => {
    expect([object, array, set, map].map(head)).toEqual(
      new Array(4).fill('drummer')
    )
  })
})
