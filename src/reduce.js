const curry = require('./curry')
const entries = require('./entries')
const then = require('./then')

const reduce = reducer => (acc, value, key, collection, index) =>
  then(result => reducer(result, value, key, collection, index), acc)

const reduceAll = (reducer, seed, collection) =>
  Array.isArray(collection)
    ? collection.reduce(reduce(reducer), seed)
    : entries(collection).reduce(
      (acc, [key, value], index) => reduce(reducer)(acc, value, key, collection, index),
      seed
    )

module.exports = curry(reduceAll)
