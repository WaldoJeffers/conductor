const curry = require('./curry')

const slice = (start, end, array) => array.slice(start, end)

module.exports = curry(slice)
