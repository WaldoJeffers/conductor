const isPromise = require('./isPromise')

const compose = (f, g) => (...args) => {
  const result = g(...args)
  return isPromise(result) ? result.then(f) : f(result)
}

const composeAll = (...fns) => fns.reduce(compose)

module.exports = composeAll
