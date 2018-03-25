const append = require('./append')
const curry = require('./curry')
const findIndex = require('./findIndex')
const replace = require('./replace')

const upsert = (predicate, item, array) => {
  const index = findIndex(predicate, array)
  if (index >= 0) {
    return replace(index, item, array)
  }
  return append(item, array)
}

module.exports = curry(upsert)
