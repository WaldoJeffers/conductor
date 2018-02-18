const entries = require('./entries')

const reduceSync = (reducer, seed, collection) =>
  Array.isArray(collection)
    ? collection.reduce(reducer, seed)
    : entries(collection).reduce(
      (acc, [key, value]) => reducer(acc, value, key, collection),
      seed
    )

module.exports = reduceSync
