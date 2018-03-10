const curryN = require('./curryN')
const then = require('./then')

const compose = (f, g) => curryN(g.length, (...args) => then(f, g(...args)))

const composeAll = (...fns) => fns.reduce(compose)

module.exports = composeAll
