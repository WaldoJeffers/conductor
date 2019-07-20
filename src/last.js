const values = require('./values')

const last = collection => {
  const vals = values(collection)
  return vals[vals.length - 1]
}

module.exports = last