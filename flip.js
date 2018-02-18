const curry = require('./curry')

const flip = fn => curry((...args) => fn(...args.reverse()), fn.length)

module.exports = flip
