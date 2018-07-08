const curry = require('./curry')

const split = (pattern, input) => input.split(pattern)

module.exports = curry(split)
