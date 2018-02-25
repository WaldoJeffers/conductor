const next = require('./next')

const iterate = iterable => () => next(iterable)

module.exports = iterate
