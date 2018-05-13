const next = require('./next')

const iterator = iterable => iterable[Symbol.iterator]()

const iterate = iterable => {
  const it = iterator(iterable)
  return () => next(it)
}

module.exports = iterate
