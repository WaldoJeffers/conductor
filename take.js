const curry = require('./curry')

const take = (count, collection) => collection.slice(0, count)

module.exports = curry(take)
