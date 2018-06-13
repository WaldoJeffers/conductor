const curry = require('./curry')
const type = require('./type')

const concat = (a, b) => {
  switch (type(a)) {
  case 'array':
    return [...a, ...b]
  case 'set':
    return new Set([...a, ...b])
  case 'map':
    return new Map([...a, ...b])
  case 'object':
    return { ...a, ...b }
  case 'string':
  default:
    return a + b
  }
}

module.exports = curry(concat)
