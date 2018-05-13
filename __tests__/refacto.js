const branch = require('../src/branch')
const bind = require('../src/bind')
const map = require('../src/map')
const some = require('../src/some')
const always = require('../src/always')
const ifElse = require('../src/ifElse')
const values = require('../src/values')
const compose = require('../src/compose')
const apply = require('../src/apply')
const thrush = require('../src/combinators/thrush')

const checkGuardsOld = (guards, transition) => async prevObj => {
  const guardValues = await Promise.all(
    guards.map(async callback => callback(prevObj, transition))
  )

  if (!guardValues.every(a => a === true)) {
    throw new Error(
      `Guard on transition from ${transition.from} to ${
        transition.to
      } returned false`
    )
  }

  return prevObj
}

const checkGuards = (guards, transition) => prevObj =>
  compose(
    ifElse(
      a => a === true,
      () => {
        throw new Error(
          `Guard on transition from ${transition.from} to ${
            transition.to
          } returned false`
        )
      },
      always(prevObj)
    ),
    some(a => a === false),
    thrush(prevObj),
    apply(branch),
    map(bind(prevObj, transition))
  )(guards)

describe('[checkGuards] ', () => {
  it('Resolves if all "guard" callbacks evaluate or resolve to true', async () => {
    expect.assertions(1)
    const guards = [() => true, () => Promise.resolve(true)]
    const res = await checkGuards(guards, { from: 'closed', to: 'openned' })({
      id: 1,
      a: 'a',
      b: 'b',
    })
    expect(res).toMatchObject({
      id: 1,
      a: 'a',
      b: 'b',
    })
  })

  it('Rejects with an error if some "guard" callbacks evaluate or resolve to false', async () => {
    expect.assertions(1)
    const guards = [
      () => true,
      () => Promise.resolve(true),
      () => Promise.resolve(false),
    ]

    try {
      await checkGuards(guards, { from: 'closed', to: 'openned' })({
        id: 1,
        a: 'a',
        b: 'b',
      })
    } catch (err) {
      expect(err.message).toBe(
        'Guard on transition from closed to openned returned false'
      )
    }
  })

  it('Rejects with the first error thrown if some "guard" callbacks throws', async () => {
    expect.assertions(1)
    const guards = [
      () => true,
      async () => {
        await new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error('Another error')), 0)
        })
      },
      () => {
        throw new Error('Something went wrong')
      },
      () => Promise.resolve(false),
    ]

    try {
      await checkGuards(guards, { from: 'closed', to: 'openned' })({
        id: 1,
        a: 'a',
        b: 'b',
      })
    } catch (err) {
      expect(err.message).toBe('Something went wrong')
    }
  })
})
