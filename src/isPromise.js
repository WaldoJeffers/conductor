const type = require('./type')

const isPromise = value => type(value) === 'promise'

module.exports = isPromise
