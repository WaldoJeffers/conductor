const type = require('./type')

const keys = collection => {
  switch (type(collection)) {
  case 'array':
    return collection
  case 'object':
    return Object.keys(collection)
  case 'set':
  case 'map':
    return Array.from(collection.keys())
  }
}

module.exports = keys
