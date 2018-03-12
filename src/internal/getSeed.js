const type = require('../type')

const getSeed = collection => {
  switch (type(collection)) {
  case 'array':
    return []
  case 'object':
    return {}
  case 'map':
    return new Map()
  case 'set':
    return new Set()
  }
}

module.exports = getSeed
