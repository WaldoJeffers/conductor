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

