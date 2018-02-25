const curry = require('./curry')
const isPromise = require('./isPromise')
const some = require('./some')
const ifElse = require('./ifElse')
const compose = require('./compose')
const mapTransformer = require('./transformers/map')
const dump = require('./dump')
const awaitAll = require('./awaitAll')

const mapSync = (mapper, collection) =>
  Array.isArray(collection)
    ? collection.map(mapper)
    : dump(mapTransformer(mapper), collection)

module.exports = curry(compose(ifElse(some(isPromise), awaitAll), mapSync))
