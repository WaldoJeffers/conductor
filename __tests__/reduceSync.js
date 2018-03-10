const reduceSync = require('../src/reduceSync')

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const object = {
	firstname: 'James',
	lastname: 'M'
}
const map = new Map([['firstname', 'James'], ['lastname', 'M']])
const set = new Set(array)

describe('reduceSync', () => {
	it('should reduce an array into a new array containing the same elements', () => {
		const reducedArray = reduceSync((acc, item) => acc.concat(item), [], array)
		expect(reducedArray).toEqual(array)
		expect(reducedArray).not.toBe(array)
	})

	it('should reduce an object into a new object containing the same elements', () => {
		const newObject = reduceSync(
			(acc, value, key) => {
				acc[key] = value
				return acc
			},
			{},
			object
		)
		expect(newObject).toEqual(object)
		expect(newObject).not.toBe(object)
	})

	it('should reduce a map into a new map containing the same elements', () => {
		const newMap = reduceSync(
			(acc, value, key) => {
				acc.set(key, value)
				return acc
			},
			new Map(),
			map
		)
		expect(newMap).toEqual(map)
		expect(newMap).not.toBe(map)
	})

	it('should reduce a set into a new set containing the same elements', () => {
		const newSet = reduceSync(
			(acc, value) => {
				acc.add(value)
				return acc
			},
			new Set(),
			set
		)
		expect(newSet).toEqual(set)
		expect(newSet).not.toBe(set)
	})
})
