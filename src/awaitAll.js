const iterate = require('./iterate')
const values = require('./values')
const dump = require('./dump')
const mapTransformer = require('./transformers/map')

const awaitAll = collection =>
  Array.isArray(collection)
    ? Promise.all(collection)
    : Promise.all(values(collection)).then(values =>
      dump(mapTransformer(iterate(values)), collection)
    )

module.exports = awaitAll
