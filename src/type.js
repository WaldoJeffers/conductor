const type = value => {
  switch (value) {
  case null:
    return 'null'
  case undefined:
    return 'undefined'
  default:
    return value.constructor.name.toLowerCase()
  }
}

module.exports = type
