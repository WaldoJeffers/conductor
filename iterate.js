const next = require('./next')

const iterate = collection => () => next(collection)

module.exports = iterate
