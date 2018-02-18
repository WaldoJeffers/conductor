const identity = require('./identity')

const branch = (predicate, ifTrue = identity, ifFalse = identity) => (
  ...args
) => (predicate(...args) ? ifTrue : ifFalse)(...args)

module.exports = branch
