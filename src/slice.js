const curry = require('./curry')
const dump = require('./dump')
const length = require('./length')

const sliceTransformer = (start, end) => reducer => (acc, item, key, collection, index) => index >= start && index < end ? reducer(acc, item, key, collection, index) : acc

const slice = (start, end, collection) => typeof collection.__proto__.slice === 'function' ?  collection.slice(start, end) : dump(sliceTransformer(start < 0 ? start + length(collection) : start, end < 0 ? end + length(collection) : end), collection)

module.exports = curry(slice)
