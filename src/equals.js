const curry = require('./curry')
const type = require('./type')

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
            a.every((value, index) => equals(value, b[index]))
        )
      case 'set':
        return (
          a.size === b.size &&
            [...a].every(value_a =>
              [...b].some(value_b => equals(value_a, value_b))
            )
        )
      case 'map':
        return (
          a.size === b.size &&
            [...a.keys()].every(key => equals(a.get(key), b.get(key)))
        )
      case 'object':
        return (
          Object.keys(a).length === Object.keys(b).length &&
            Object.keys(a).every(key => equals(a[key], b[key]))
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
