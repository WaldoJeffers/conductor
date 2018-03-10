const reduce = require('./reduce')

const transduce = (transformer, reducer, seed, collection) =>
  reduce(transformer(reducer), seed, collection)

module.exports = transduce
