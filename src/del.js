const curry = require('./curry')
const reject = require('./reject')

const isKeyEqualTo = value => (_, key) => key === value

const del = (key, collection) => reject(isKeyEqualTo(key), collection)

module.exports = curry(del)
