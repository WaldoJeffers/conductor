const values = require('./values')
const curry = require('./curry')

const some = (predicate, collection) => values(collection).some(predicate)

module.exports = curry(some)
