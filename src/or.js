const typeOf = require('./type')

const toFunc = x => typeOf(x) === 'function' ? x : () => x

const or = (left, right) => (
  ...args
) => Boolean(toFunc(left)(...args) || toFunc(right)(...args))

module.exports = or
