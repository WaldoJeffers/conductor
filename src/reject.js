const curry = require('./curry')
const filter = require('./filter')
const not = require('./not')
const compose = require('./compose')

const reject = (predicate, collection) =>
  filter(
    compose(
      not,
      predicate
    ),
    collection
  )

module.exports = curry(reject)
