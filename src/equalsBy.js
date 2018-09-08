const curry = require('./curry')
const type = require('./type')

const equalsBy = (predicate, a, b) =>
  type(predicate) === 'string'
    ? a[predicate] === b[predicate]
    : predicate(a) === predicate(b)

module.exports = curry(equalsBy)
