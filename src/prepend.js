const curry = require('./curry')
const type = require('./type')

const prepend = (item, collection) => {
  switch (type(collection)) {
  case 'set':
    return new Set([item, ...collection])
  case 'array':
  default:
    return [item, ...collection]
  }
}

module.exports = curry(prepend)
