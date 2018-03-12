const apply = require('./apply')
const flip = require('./flip')
const map = require('./map')

const branch = (...fns) => (...args) => map(flip(apply)(args), fns)

module.exports = branch
