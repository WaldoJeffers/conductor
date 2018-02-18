const typeOf = require('./type')
const curry = require('./curry')

const forEachSync = (fn, collection) =>
  typeOf(collection) === 'object'
    ? Object.entries(collection).forEach(([key, value]) =>
      fn(value, key, collection)
    )
    : collection.forEach(fn)

module.exports = curry(forEachSync)
