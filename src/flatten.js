const compose = require('./compose')
const typeOf = require('./type')
const dump = require('./dump')
const into = require('./into')

const concatKey = parentKey => reducer => (acc, item, key, collection) =>
  reducer(acc, item, `${parentKey}.${key}`, collection)

const transformer = reducer => (acc, item, key, collection) =>
  typeOf(item) === typeOf(collection)
    ? into(acc, compose(concatKey(key), transformer), item)
    : reducer(acc, item, key, collection)

const flatten = dump(transformer)

module.exports = flatten
