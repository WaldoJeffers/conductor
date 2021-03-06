const curry = require('./curry')
const type = require('./type')
const every = require('./every')
const some = require('./some')

const equals = (a, b) => {
  if (a === b) {
    return true
  } else {
    const type_a = type(a)
    const type_b = type(a)
    if (type_a === type_b) {
      switch (type(a)) {
      case 'array':
        return (
          a.length === b.length &&
            every((value, index) => equals(value, b[index]), a)
        )
      case 'set': {
        if (a.size !== b.size) return false

        const b_copy = new Set([...b])

        return every(
          value_a =>
            some(value_b => {
              const found = equals(value_a, value_b)

              if (found) {
                b_copy.delete(value_b)
              }

              return found
            }, b_copy),
          a)
      }
      case 'map':
        return (
          a.size === b.size &&
            every(key => equals(a.get(key), b.get(key)), a.keys())
        )
      case 'object':
        return (
          Object.keys(a).length === Object.keys(b).length &&
            every(key => equals(a[key], b[key]), Object.keys(a))
        )
      case 'date':
        return a.getTime() === b.getTime()
      default:
        break
      }
    }
  }
  return false
}

module.exports = curry(equals)
