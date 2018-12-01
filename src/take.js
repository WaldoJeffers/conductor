const curry = require('./curry')

const take = (count, array) =>
  count >= 0 ? array.slice(0, count) : array.slice(count)

module.exports = curry(take)
