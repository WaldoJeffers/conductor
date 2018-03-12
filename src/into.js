const curry = require('./curry')
const transduce = require('./transduce')
const getAddReducer = require('./internal/getAddReducer')

const into = (accumulator, transformer, collection) =>
  transduce(transformer, getAddReducer(collection), accumulator, collection)

module.exports = curry(into)
