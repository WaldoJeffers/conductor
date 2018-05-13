const curry = require('./curry')
const filterTransformer = require('./transformers/filter')
const getAddReducer = require('./internal/getAddReducer')
const getSeed = require('./internal/getSeed')
const reduce = require('./reduce')
const compose = require('./compose')
const map = require('./map')
const values = require('./values')
const iterate = require('./iterate')
const flip = require('./flip')

const filterSync = (predicate, collection) =>
  Array.isArray(collection)
    ? collection.filter(predicate)
    : reduce(
      filterTransformer(predicate)(getAddReducer(collection)),
      getSeed(collection),
      collection
    )

const filter = (predicate, collection) =>
  compose(
    flip(filterSync)(collection),
    iterate,
    map(predicate),
    // retrieve values as an array, otherwise mapping predicates will fail on sets
    // (it will only contain 2 values, true & false)
    values
  )(collection)

module.exports = curry(filter)
