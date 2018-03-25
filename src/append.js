const curry = require('./curry')

const append = (item, array) => [...array, item]

module.exports = curry(append)
