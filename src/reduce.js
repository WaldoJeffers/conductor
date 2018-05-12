const curry = require('./curry')
const entries = require('./entries')
const then = require('./then')

const reduce = reducer => (acc, value, key, collection) =>
  then(result => reducer(result, value, key, collection), acc)

const reduceAll = (reducer, seed, collection) =>
  Array.isArray(collection)
    ? collection.reduce(reduce(reducer), seed)
    : entries(collection).reduce(
      (acc, [key, value]) => reduce(reducer)(acc, value, key, collection),
      seed
    )

module.exports = curry(reduceAll)
