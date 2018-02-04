const curry = require('./curry')

const get = (key, collection) => collection[key]

module.exports = curry(get)
