const flatten = require('../src/flatten')

const array = [1, 2, 3]
const nestedArray = [1, [2, 3]]
const deepNestedArray = [1, [2, [3]]]

const object = { a: 1, b: 2, c: 3 }
const nestedObject = { a: { b: 2, c: 3 } }
const deepNestedObject = { a: { b: { c: 3 } } }

const set = new Set(array)
const nestedSet = new Set([1, new Set([2, 3])])
const deepNestedSet = new Set([1, new Set([2, new Set([3])])])

const map = new Map(Object.entries(object))
const nestedMap = new Map([['a', new Map(Object.entries(nestedObject.a))]])
const deepNestedMap = new Map([['a', new Map([['b', new Map([['c', 3]])]])]])

describe('flatten', () => {
  it('should flatten an array', () => {
    expect(flatten(array)).toEqual(array)
  })

  it('should flatten a nested array', () => {
    expect(flatten(nestedArray)).toEqual(array)
  })

  it('should flatten a deep nested array', () => {
    expect(flatten(deepNestedArray)).toEqual(array)
  })

  it('should flatten an object', () => {
    expect(flatten(object)).toEqual(object)
  })

  it('should flatten a nested object', () => {
    expect(flatten(nestedObject)).toEqual({ 'a.b': 2, 'a.c': 3 })
  })

  it('should flatten a deep nested object', () => {
    expect(flatten(deepNestedObject)).toEqual({ 'a.b.c': 3 })
  })

  it('should flatten a set', () => {
    expect(flatten(set)).toEqual(set)
  })

  it('should flatten a nested set', () => {
    expect(flatten(nestedSet)).toEqual(set)
  })

  it('should flatten a deep nested set', () => {
    expect(flatten(deepNestedSet)).toEqual(set)
  })

  it('should flatten a map', () => {
    expect(flatten(map)).toEqual(map)
  })

  it('should flatten a nested map', () => {
    expect(flatten(nestedMap)).toEqual(new Map([['a.b', 2], ['a.c', 3]]))
  })

  it('should flatten a deep nested map', () => {
    expect(flatten(deepNestedMap)).toEqual(new Map([['a.b.c', 3]]))
  })
})
