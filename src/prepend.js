const curry = require('./curry')

const prepend = (item, array) => [item, ...array]

module.exports = curry(prepend)
