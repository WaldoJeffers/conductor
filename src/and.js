const typeOf = require('./type')

const toFunc = x => typeOf(x) === 'function' ? x : () => x

const and = (left, right) => (
  ...args
) => Boolean(toFunc(left)(...args) && toFunc(right)(...args))

module.exports = and
