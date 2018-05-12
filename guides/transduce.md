---
description: Reduces a collection using a transformer and a reducer
---

# transduce

**`transduce :: (Function transformer, Function reducer, Any seed, Collection collection) => Any output`**

## description

Returns an `output` value after reducing an input `collection` using the provided `transformer` and `reducer`. 

The reducer function should have the following type signature:  
 `(Any accumulator, Any value, Any key, Collection collection) => Any output`, where:

* **`accumulator`** is the result of the previous `reduce` iterations
* **`value`** is the value of the current item in the iteration
* **`key`** is the key of the current item in the iteration
* **`collection`** is the input collection being iterated on

The transformer function should accept a reducer and return another reducer function, and thus have the following type signature  
`(Any accumulator, Any value, Any key, Collection collection) =>  
  (Any accumulator, Any value, Any key, Collection collection) => Any output`

## example

```javascript
const characters = [
  { name: 'Luke', side: 'light' },
  { name: 'Han', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
]
const concatNames = (acc, name) => {
  acc.push(name)
  return acc
}
const retrieveGoodGuysName = reducer => (acc, character) =>
  character.side === 'light' ? reducer(acc, character.name) : acc
const seed = []
transduce(retrieveGoodGuysName, concatNames, seed, characters) // ['Luke', 'Han']
```

Suppose we have an array of `characters`, each having a `name` and a `side` property. We want to **get a new array** containing only the **names** of the **good** guys. If we look closely at what we want to achieve, we can decompose it into 2 parts:

1. Transforming each item \(filtering it and accessing a property\)
2. Combining these items in a new array

Of course, we could also use map and filter to perform this operation, like so

```javascript
compose(map(get('name')), filter(compose(equals('light'), get('side'))))(characters)
```

