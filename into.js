const curry = require('./curry')
const reduce = require('./reduceSync')
const getAddReducer = require('./internal/getAddReducer')

const into = (accumulator, transformer, collection) =>
  reduce(transformer(getAddReducer(collection)), accumulator, collection)

module.exports = curry(into)
