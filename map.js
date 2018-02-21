const curry = require('./curry')
const isPromise = require('./isPromise')
const values = require('./values')
const some = require('./some')
const branch = require('./branch')
const compose = require('./compose')
const valueIterator = require('./valueIterator')
const iterate = require('./iterate')
const mapTransformer = require('./transformers/map')
const dump = require('./dump')

const mapSync = (mapper, collection) =>
  Array.isArray(collection)
    ? collection.map(mapper)
    : dump(mapTransformer(mapper), collection)

const awaitAll = collection =>
  Array.isArray(collection)
    ? Promise.all(collection)
    : Promise.all(values(collection))
      .then(valueIterator)
      .then(values => mapSync(iterate(values), collection))

module.exports = curry(compose(branch(some(isPromise), awaitAll), mapSync))
