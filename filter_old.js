const map = require('./map')
const just = require('./just')
const compose = require('./compose')
const curry = require('./curry')
const identity = require('./identity')
const branch = require('./branch')
const typeOf = require('./type')

const getSeed = type => {
  let seed
  switch (type) {
  case 'array':
    seed = []
    return { seed, reducer: value => seed.push(value) }
  case 'object':
    seed = {}
    return { seed, reducer: (value, key) => (seed[key] = value) }
  case 'map':
    seed = new Map()
    return { seed, reducer: seed.set }
  case 'set':
    seed = new Set()
    return { seed, reducer: seed.add }
  }
}

const filter = (predicate, collection) => {
  const { seed, reducer } = getSeed(typeOf(collection))
  return compose(
    just(seed),
    map((value, key) =>
      compose(branch(identity, () => reducer(value, key)), predicate)(
        value,
        key,
        collection
      )
    )
  )(collection)
}

module.exports = curry(filter)
