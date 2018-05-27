const curry = require('./curry')
const type = require('./type')

const equals = (a, b) => {
  if (a === b) {
    return true
  } else if (type(a) === 'array') {
    return a.every((value, index) => equals(value, b[index]))
  } else if (type(a) === 'object') {
    return Object.keys(a).every(key => equals(a[key], b[key]))
  } else if (type(a) === 'date') {
    return equals(a.getTime(), b.getTime())
  }
  return false
}

module.exports = curry(equals)
