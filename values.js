const type = require('./type')

const values = collection => {
  switch (type(collection)) {
  case 'array':
    return collection
  case 'object':
    return Object.values(collection)
  case 'set':
  case 'map':
    return Array.from(collection.values())
  }
}

module.exports = values
