const delay = require('./delay')

const sleep = duration => delay(duration)()

module.exports = sleep
