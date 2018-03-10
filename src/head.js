const valueIterator = require('./valueIterator')
const next = require('./next')
const compose = require('./compose')

const head = compose(next, valueIterator)

module.exports = head
