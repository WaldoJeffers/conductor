const curry = require('./curry')

const push = (item, array) => array.push(item)

module.exports = curry(push)
