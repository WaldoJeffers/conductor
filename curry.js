const curry = (fn, length = fn.length) => (...args) =>
  args.length >= length
    ? fn(...args)
    : (...otherArgs) => curry(fn)(...args, ...otherArgs)

module.exports = curry
