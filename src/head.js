const get = require('./get')
const compose = require('./compose')
const values = require('./values')

const head = compose(get(0), values)

module.exports = head
