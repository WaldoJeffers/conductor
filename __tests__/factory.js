const factory = require('../src/factory')

const add = (a, b) => a + b
const multiply = (a, b) => a * b
const double = x => 2 * x

describe('factory', () => {
  it('should return a factory based on the provided specification', () => {
    const fact = factory({
      sum: add,
      product: multiply,
      double,
    })
    expect(fact(2, 5)).toEqual({ sum: 7, product: 10, double: 4 })
  })

  it('should work with nested specifications', () => {
    const spec = {
      binary: {
        sum: add,
        product: multiply,
      },
      unary: { double },
    }
    const fact = factory(spec)
    expect(fact(2, 5)).toEqual({
      binary: {
        sum: 7,
        product: 10,
      },
      unary: { double: 4 },
    })
  })

  it('should be usable as a replacement for DI', () => {
    const User = {
      get: db => id => db.findOne(id),
    }
    const db = { findOne: jest.fn() }
    const spy = jest.spyOn(db, 'findOne')

    factory(User)(db).get('uuid')
    expect(spy).toHaveBeenCalledWith('uuid')
  })

  it('should accept non-function values in the input specification', () => {
    const spec = { id: 2, createdAt: () => Date.now(), name: x => x }
    const fact = factory(spec)
    expect(fact('Elliot')).toEqual({
      id: 2,
      createdAt: expect.any(Number),
      name: 'Elliot',
    })
  })
})
