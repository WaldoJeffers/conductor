const identity = require('./identity')

const ifElse = (predicate, ifTrue = identity, ifFalse = identity) => (
  ...args
) => (predicate(...args) ? ifTrue : ifFalse)(...args)

module.exports = ifElse
