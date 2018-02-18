const curry = require('./curry')
const type = require('./type')
const reduceSync = require('./reduceSync')
const isPromise = require('./isPromise')
const values = require('./values')
const some = require('./some')
const branch = require('./branch')
const compose = require('./compose')
const valueIterator = require('./valueIterator')

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

const mapTransformer = mapper => reducer => (acc, value, key, collection) =>
  reducer(acc, mapper(value, key, collection), key, collection)

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
      .then(values => mapSync(() => values.next().value, collection))

module.exports = curry(compose(branch(some(isPromise), awaitAll), mapSync))
