const identity = require('./identity')
const then = require('./then')

const ifElse = (predicate, ifTrue = identity, ifFalse = identity) => (
  ...args
) =>
  then(test => (test ? ifTrue(...args) : ifFalse(...args)), predicate(...args))

module.exports = ifElse
