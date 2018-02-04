const type = require('./type')
const get = require('./get')
const isPromise = require('./isPromise')

const reduce = (reducer, seed, collection) => {
  const isObject = type(collection) === 'object'
  const iterable = isObject ? Object.keys(collection) : collection
  let acc = seed
  for (let item of iterable) {
    item = isObject ? get(item, collection) : item
    acc = isPromise(acc)
      ? acc.then(result => reducer(result, item))
      : reducer(acc, item)
  }
  return acc
}

// const reduceB = (reducer, seed, collection) =>
//   (type(collection) === 'object' ? Object.keys(collection) : collection).reduce(
//     (acc, item, key, iterable) =>
//       isPromise(acc)
//         ? acc.then(result =>
//           reducer(
//             result,
//             type(collection) == 'object' ? collection[item] : item,
//             type(collection) === 'object' ? item : key,
//             iterable
//           )
//         )
//         : reducer(
//           acc,
//           type(collection) == 'object' ? collection[item] : item,
//           type(collection) === 'object' ? item : key,
//           iterable
//         ),
//     seed
//   )
//
// const reduceC = (reducer, seed, collection) => {
//   const isObject = type(collection) === 'object'
//   const iterable = isObject ? Object.keys(collection) : collection
//   return iterable.reduce(
//     (acc, item, key) =>
//       isPromise(acc)
//         ? acc.then(result =>
//           reducer(result, isObject ? get(collection, item) : item, iterable)
//         )
//         : reducer(acc, isObject ? get(collection, item) : item, key, iterable),
//     seed
//   )
// }

module.exports = reduce
