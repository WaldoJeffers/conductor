const type = require('./type')

const entries = collection =>
  type(collection) === 'object'
    ? Object.entries(collection)
    : Array.from(collection.entries())

module.exports = entries
