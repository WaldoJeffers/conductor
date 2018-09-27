const apply = require('./apply')
const map = require('./map')

const branch = (...fns) => (...args) => map(fn => apply(fn, args), fns)

module.exports = branch
