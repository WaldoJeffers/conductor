const curry = require('./curry')
const isPromise = require('./isPromise')
const type = require('./type')

//const mapObject = (mapper, object) => Object.entries(object)

const map = (mapper, collection) => {
  let isAsync = false
  let result
  const typeOf = type(collection)
  if (typeOf === 'array') {
    result = collection.map((value, index, iterable) => {
      const newValue = mapper(value, index, iterable)
      if (!isAsync && isPromise(newValue)) {
        isAsync = true
      }
      return newValue
    })
  } else if (typeOf === 'object') {
    result = {}
    Object.entries(collection).forEach(([key, value]) => {
      const newValue = mapper(value, key, collection)
      if (!isAsync && isPromise(newValue)) {
        isAsync = true
      }
      result[key] = newValue
    })
  }

  return isAsync ? Promise.all(result) : result
}

// const map = (mapper, collection) => {
//   let isAsync = false
//   const result = collection.map((...args) => {
//     const co = mapper(...args)
//
//     if (isPromise(co)) {
//       isAsync = true
//     }
//     return co
//   })
//
//   return isAsync ? Promise.all(result) : result
// }

module.exports = curry(map)
