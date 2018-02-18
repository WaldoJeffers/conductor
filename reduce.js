const isPromise = require('./isPromise')
const entriesOf = require('./entries')

const reduce = reducer => (acc, value, key, collection) =>
  isPromise(acc)
    ? acc.then(result => reducer(result, value, key, collection))
    : reducer(acc, value, key, collection)

const reduceAll = (reducer, seed, collection) =>
  Array.isArray(collection)
    ? collection.reduce(reduce(reducer))
    : entriesOf(collection).reduce(
      (acc, [key, value]) => reduce(reducer)(acc, value, key, collection),
      seed
    )
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

module.exports = reduceAll
