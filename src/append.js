const curry = require('./curry')
const type = require('./type')

const append = (item, collection) => {
  switch (type(collection)) {
  case 'set':
    return new Set([...collection, item])
  case 'array':
  default:
    return [...collection, item]
  }
}

module.exports = curry(append)
