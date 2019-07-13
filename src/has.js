const curry = require('./curry')
const type = require('./type')

const has = (key, collection) => {
  switch (type(collection)) {
  case 'map':
  case 'set':
    return collection.has(key)
  case 'array':
    return key <= collection.length - 1
  case 'object':
  default:
    return collection.hasOwnProperty(key)
  }
}
module.exports = curry(has)
