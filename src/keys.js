const type = require('./type')

const keys = collection => {
  switch (type(collection)) {
  case 'object':
    return Object.keys(collection)
  case 'array':
  case 'set':
  case 'map':
    return Array.from(collection.keys())
  }
}

module.exports = keys
