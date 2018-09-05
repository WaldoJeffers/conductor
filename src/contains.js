const curry = require('./curry')
const equals = require('./equals')
const some = require('./some')
const type = require('./type')

const contains = (item, collection) =>
  type(collection) === 'string'
    ? collection.includes(item)
    : some(equals(item), collection)

module.exports = curry(contains)
