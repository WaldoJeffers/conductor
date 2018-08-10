const curry = require('./curry')
const type = require('./type')
const reduce = require('./reduce')
const clone = require('./clone')
const append = require('./append')
const contains = require('./contains')

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

const merge = (a, b) => {
  if (isCollection(b)) {
    if (isCollection(a)) {
      if (type(b) === type(a)) {
        if (type(b) === 'array') {
          return reduce(
            (acc, value) => {
              // use upsert?
              if (!contains(value, acc)) {
                return append(value, acc)
              }
              return acc
            },
            clone(a),
            b
          )
        } else if (type(b) === 'object') {
          return reduce(
            (acc, value, key) => {
              acc[key] = merge(acc[key], value)
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
            (acc, value, key) => acc.set(key, merge(acc.get(key), value)),
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

module.exports = curry(merge)
