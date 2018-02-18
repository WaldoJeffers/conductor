const just = require('./just')
const compose = require('./compose')
const map = require('./map')
const curry = require('./curry')

const forEach = (fn, collection) =>
  compose(just(undefined), map)(fn, collection)

module.exports = curry(forEach)
