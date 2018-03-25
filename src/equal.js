const curry = require('./curry')
const type = require('./type')

const equal = (a, b) => {
  if (a === b) {
    return true
  } else if (type(a) === 'array') {
    return a.every((value, index) => equal(value, b[index]))
  } else if (type(a) === 'object') {
    return Object.keys(a).every(key => equal(a[key], b[key]))
  } else if (type(a) === 'date') {
    return equal(a.getTime(), b.getTime())
  }
  return false
}

module.exports = curry(equal)
