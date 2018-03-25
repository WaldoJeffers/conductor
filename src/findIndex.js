const compose = require('./compose')
const curry = require('./curry')
const map = require('./map')
const identity = require('./identity')

const findIndex = compose(arr => arr.findIndex(identity), map)

module.exports = curry(findIndex)
