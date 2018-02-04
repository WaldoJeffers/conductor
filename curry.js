const curry = fn => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...otherArgs) => curry(fn)(...args, ...otherArgs)

module.exports = curry
