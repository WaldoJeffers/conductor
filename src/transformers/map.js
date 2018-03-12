const map = mapper => reducer => (acc, value, key, collection) =>
  reducer(acc, mapper(value, key, collection), key, collection)

module.exports = map
