const type = value => {
  switch (value) {
  case null:
    return 'null'
  case undefined:
    return 'undefined'
  default: {
    const constructor_name = value.constructor.name.toLowerCase()
    return constructor_name === 'asyncfunction'
      ? 'function'
      : constructor_name
  }
  }
}

module.exports = type
