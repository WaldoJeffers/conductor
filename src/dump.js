const into = require('./into')
const curry = require('./curry')
const getSeed = require('../internal/getSeed')

const dump = (transformer, collection) =>
	into(getSeed(collection), transformer, collection)

module.exports = curry(dump)
