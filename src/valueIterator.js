const type = require('./type')

const valueIterator = collection => {
  switch (type(collection)) {
  case 'array':
    return collection[Symbol.iterator]()
  case 'object':
    return Object.values(collection)[Symbol.iterator]()
  case 'set':
  case 'map':
    return collection.values()
  }
}

module.exports = valueIterator
