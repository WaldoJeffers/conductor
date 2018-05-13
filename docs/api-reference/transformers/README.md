# transformers

## general description

Transformers are utility function which _decorate_ reducers: they take a reducer as input, and output another reducer, with added functionality. They are extremely useful when used with transduce, as they are very modular and thus easily composable.

## some definitions

### reducer

A **reducer** is a function whose role is to merge an _item_ into an _accumulator_ \(a entity containing already merged values\). Usually, a reducer is called several times while iterating over an iterable. For example, Array.prototype.push is a reducer: it takes an accumulator \(the array\) and an item, and merges the item into the array. In conductor, reducers have the following type signature:

```erlang
reducer :: (Any accumulator, Any value, Any index, Collection collection) => Any value
```

### transformer

A transformer is a function whose role is to decorate \(add functionality\) to a reducer. It accepts an input reducer, and outputs another reducer. Transformers have the following type signature:

```erlang
transformer :: Reducer input => Reducer output
```

### transducer

```erlang
transducer :: (Transformer transformer, Reducer reducer, Any seed, Collection collection) => Any value
```

