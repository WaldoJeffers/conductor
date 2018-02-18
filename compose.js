const isPromise = require('./isPromise')
const curry = require('./curry')

const compose = (f, g) =>
  curry((...args) => {
    const result = g(...args)
    return isPromise(result) ? result.then(f) : f(result)
  }, g.length)

const composeAll = (...fns) => fns.reduce(compose)

module.exports = composeAll
