const arity = require('./arity')
const map = require('./map')
const type = require('./type')

const clone = input => {
  switch (type(input)) {
  case 'array':
  case 'object':
  case 'set':
  case 'map':
    return map(clone, input)
  case 'date':
    return new Date(input)
  case 'function':
    return arity(input.length, input)
  default:
    return input
  }
}

module.exports = clone
