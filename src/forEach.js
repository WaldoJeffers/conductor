const always = require('./always')
const compose = require('./compose')
const map = require('./map')
const curry = require('./curry')

const forEach = (fn, collection) =>
  compose(always(undefined), map)(fn, collection)

module.exports = curry(forEach)
