const values = require('./entries')
const map =

const awaitAll = collection =>
  Array.isArray(collection)
    ? Promise.all(collection)
    : Promise.all(values(collection)).then(values => map)

module.exports = awaitAll
