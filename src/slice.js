const curry = require('./curry')

const slice = (start, end, collection) => collection.slice(start, end)

module.exports = curry(slice)
