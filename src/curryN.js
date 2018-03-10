const arity = require('./arity')

const curryN = (length, fn) =>
  arity(
    length,
    (...args) =>
      args.length >= length
        ? fn(...args)
        : curryN(length - args.length, (...otherArgs) =>
          fn(...args, ...otherArgs)
        )
  )

module.exports = curryN(2, curryN)
