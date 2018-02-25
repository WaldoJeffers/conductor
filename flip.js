const curryN = require('./curryN')

const flip = fn => curryN(fn.length, (...args) => fn(...args.reverse()))

module.exports = flip
