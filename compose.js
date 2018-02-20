const curry = require('./curry')
const then = require('./then')

const compose = (f, g) => curry((...args) => then(f, g(...args)), g.length)

const composeAll = (...fns) => fns.reduce(compose)

module.exports = composeAll
