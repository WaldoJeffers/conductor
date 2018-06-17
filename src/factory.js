const map = require('./map')
const type = require('./type')

const factory = spec => (...args) =>
  map(value => {
    switch (type(value)) {
    case 'function':
      return value(...args)
    case 'object':
      return factory(value)(...args)
    default:
      return value
    }
  }, spec)

module.exports = factory
