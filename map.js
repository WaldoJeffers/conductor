const curry = require('./curry')
const isPromise = require('./isPromise')

const map = (mapper, collection) => {
  let isAsync = false
  const result = collection.map((...args) => {
    const co = mapper(...args)

    if (isPromise(co)) {
      isAsync = true
    }
    return co
  })

  return isAsync ? Promise.all(result) : result
}

module.exports = curry(map)
