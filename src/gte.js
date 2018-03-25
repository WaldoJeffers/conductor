const curry = require('./curry')

const gte = (a, b) => a >= b

module.exports = curry(gte)
