const identity = require('./identity')
const isPromise = require('./isPromise')
const reduce = require('./reduce')

const compose = (f, g) => (...args) => {
  const result = g(...args)
  return isPromise(result) ? result.then(f) : f(result)
}

const composeAll = (...fns) => fns.reduce(compose)
//const composeAll = (...fns) => reduce(compose, identity, fns)

module.exports = composeAll
