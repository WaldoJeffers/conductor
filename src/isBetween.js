const curry = require('./curry')

const isBetween = (min, max, number) => number >= min && number <= max

module.exports = curry(isBetween)