const curry = require('./curry')
const type = require('./type')
const equals = require('./equals')

const equalsBy = (getter, a, b) =>
  type(getter) === 'string'
    ? equals(a[getter], b[getter])
    : equals(getter(a), getter(b))

module.exports = curry(equalsBy)
