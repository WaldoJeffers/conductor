const curry = require('./curry')
const type = require('./type')

const get = (key, collection) => {
  switch (type(collection)) {
  case 'map':
    return collection.get(key)
  case 'set':
    return collection.has(key) ? key : undefined
  default:
    return collection[key]
  }
}

module.exports = curry(get)
