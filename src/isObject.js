const type = require('./type')

const isObject = value => type(value) === 'object'

module.exports = isObject
