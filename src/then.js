const curry = require('./curry')
const isPromise = require('./isPromise')

const then = (fn, value) => (isPromise(value) ? value.then(fn) : fn(value))

module.exports = curry(then)
