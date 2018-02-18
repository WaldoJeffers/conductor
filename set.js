const curry = require('./curry')
const typeOf = require('./type')

const set = (key, collection, value) => {
  console.log(key, collection, value)
  switch (typeOf(collection)) {
  case 'map':
    collection.set(key, value)
    break
  case 'set':
    collection.add(value)
    break
  default:
    collection[key] = value
  }
}

module.exports = curry(set)
