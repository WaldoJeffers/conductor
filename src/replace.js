const curry = require('./curry')

const replace = (index, item, array) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index + 1),
]

module.exports = curry(replace)
