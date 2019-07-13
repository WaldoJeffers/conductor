const entries = require('./entries')
const curry = require('./curry')

const every = (predicate, collection) =>
  entries(collection).every(([key, value]) => predicate(value, key, collection))

module.exports = curry(every)
