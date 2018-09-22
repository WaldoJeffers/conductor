const mergeBy = require('./mergeBy')
const identity = require('./identity')

const merge = mergeBy(identity)

module.exports = merge
