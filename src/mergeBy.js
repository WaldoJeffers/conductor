const curry = require('./curry')
const type = require('./type')
const reduce = require('./reduce')
const clone = require('./clone')
const append = require('./append')
const contains = require('./contains')
const equalsBy = require('./equalsBy')
const identity = require('./identity')
const findIndex = require('./findIndex')
const replace = require('./replace')

const isCollection = value => {
  switch (type(value)) {
  case 'array':
  case 'object':
  case 'map':
  case 'set':
    return true
  default:
    return false
  }
}

const mergeBy = (getter, a, b) => {
  const isEqualTo = equalsBy(getter)
  if (isCollection(b)) {
    if (isCollection(a)) {
      if (type(b) === type(a)) {
        if (type(b) === 'array') {
          return reduce(
            (acc, value) => {
              const index = findIndex(isEqualTo(value), acc)
              if (index >= 0) {
                return replace(index, mergeBy(identity, acc[index], value), acc)
              }
              return append(value, acc)
            },
            clone(a),
            b
          )
        } else if (type(b) === 'object') {
          return reduce(
            (acc, value, key) => {
              acc[key] = mergeBy(identity, acc[key], value)
              return acc
            },
            clone(a),
            b
          )
        } else if (type(b) === 'set') {
          return reduce(
            (acc, value) => {
              if (!contains(value, acc)) {
                acc.add(value)
                return acc
              }
              return acc
            },
            clone(a),
            b
          )
        } else if (type(b) === 'map') {
          return reduce(
            (acc, value, key) =>
              acc.set(key, mergeBy(identity, acc.get(key), value)),
            clone(a),
            b
          )
        }
      }
    }
    return clone(b)
  }
  return b
}

module.exports = curry(mergeBy)
