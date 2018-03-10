const type = require('../src/type')

const push = (array, value) => {
	array.push(value)
	return array
}
const add = (set, value) => {
	set.add(value)
	return set
}
const set = (map, value, key) => {
	map.set(key, value)
	return map
}
const assign = (object, value, key) => {
	object[key] = value
	return object
}

const getAddReducer = collection => {
	switch (type(collection)) {
		case 'array':
			return push
		case 'object':
			return assign
		case 'map':
			return set
		case 'set':
			return add
	}
}

module.exports = getAddReducer
