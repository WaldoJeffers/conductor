const curry = require('./curry')
const equals = require('./equals')
const some = require('./some')

const contains = (item, collection) => some(equals(item), collection)

module.exports = curry(contains)
