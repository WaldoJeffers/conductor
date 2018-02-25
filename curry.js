const curryN = require('./curryN')

const curry = fn => curryN(fn.length, fn)

module.exports = curry
