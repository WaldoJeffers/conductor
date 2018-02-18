const type = require('./type')

const add = (acc, value, key) => {
  switch (type(acc)) {
  case 'array':
    acc.push(value)
    break
  case 'object':
    acc[key] = value
    break
  case 'map':
    acc.set(key, value)
    break
  case 'set':
    acc.add(value)
    break
  }
}

module.exports = add
