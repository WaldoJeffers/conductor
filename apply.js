const curry = require('./curry')

const apply = (fn, args) => fn(...args)

module.exports = curry(apply)
