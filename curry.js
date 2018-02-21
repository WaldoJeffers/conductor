const curry = (fn, arity = fn.length) => (...args) =>
  args.length >= arity
    ? fn(...args)
    : (...otherArgs) => curry(fn)(...args, ...otherArgs)

module.exports = curry
