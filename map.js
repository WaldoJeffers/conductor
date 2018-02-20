const curry = require('./curry')
const type = require('./type')
const reduceSync = require('./reduceSync')
const isPromise = require('./isPromise')
const values = require('./values')
const some = require('./some')
const branch = require('./branch')
const compose = require('./compose')
const valueIterator = require('./valueIterator')
const iterate = require('./iterate')
const mapTransformer = require('./transformers/map')

// Use transduce ?
const objectReducer = (acc, value, key) => {
  acc[key] = value
  return acc
}

const mapReducer = (acc, value, key) => {
  acc.set(key, value)
  return acc
}

const setReducer = (acc, value) => {
  acc.add(value)
  return acc
}

const mapSync = (mapper, collection) => {
  switch (type(collection)) {
  case 'array':
    return collection.map(mapper)
  case 'object':
    return reduceSync(mapTransformer(mapper)(objectReducer), {}, collection)
  case 'map':
    return reduceSync(
      mapTransformer(mapper)(mapReducer),
      new Map(),
      collection
    )
  case 'set':
    return reduceSync(
      mapTransformer(mapper)(setReducer),
      new Set(),
      collection
    )
  }
}

const awaitAll = collection =>
  Array.isArray(collection)
    ? Promise.all(collection)
    : Promise.all(values(collection))
      .then(valueIterator)
      .then(values => mapSync(iterate(values), collection))

module.exports = curry(compose(branch(some(isPromise), awaitAll), mapSync))
