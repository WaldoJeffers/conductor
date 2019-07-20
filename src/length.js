const type = require('./type')

const length = collection => {
  switch(type(collection)){
  case 'set':
  case 'map':
    return collection.size
  case 'object':
    return Object.keys(collection).length
  case 'array':
  default:
    return collection.length
  }
}

module.exports = length