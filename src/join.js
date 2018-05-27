const curry = require('./curry')
const values = require('./values')

const join = (separator, collection) => values(collection).join(separator)

module.exports = curry(join)
