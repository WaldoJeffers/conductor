const filter = predicate => reducer => (acc, value, key, collection) =>
  predicate(value, key, collection) ? reducer(acc, value, key, collection) : acc

module.exports = filter
