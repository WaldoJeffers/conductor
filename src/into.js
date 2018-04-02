const curry = require('./curry')
const transduce = require('./transduce')
const getAddReducer = require('./internal/getAddReducer')

const into = (accumulator, transformer, collection) =>
  transduce(transformer, getAddReducer(accumulator), accumulator, collection)

module.exports = curry(into)
