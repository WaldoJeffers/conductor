const map = require('./map')
const get = require('./get')
const curry = require('./curry')

const pluck = (key, collection) => map(get(key), collection)

module.exports = curry(pluck)
