const values = require('./values')
const curry = require('./curry')

const every = (predicate, collection) => values(collection).every(predicate)

module.exports = curry(every)
