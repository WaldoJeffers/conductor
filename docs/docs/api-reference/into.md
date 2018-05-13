# into

**`into :: (Collection seed, Transformer transformer, Collection input) => Collection output`**

## description

Create a new collection from an input collection, using the provided transformer. This allows you to easily apply a transformation on a collection. `into` is a simplified version of `reduce`, as it will automatically use the correct reducer \(`Map.prototype.set`   , `Set.prototype.set`, `Array.prototype.push`,  `Object.defineProperty`\). Because of this, one of the best use cases for `into` is **transforming a collection into a new one of a different type** \(eg. an `Object` to an `Array`\).

To allow greater control on the transformation, your transformer function needs to implement the `Transformer` specification. If your transformation is only a mapping between an input & an output value, you can simply use `map`.

Basically, 

```javascript
map(fn, collection)
=== into(getSeedFromInput(collection), mapTransformer(fn), collection)
=== transduce(mapTransformer(fn), getReducerFromInput(collection), getSeedFromInput(collection), collection)
=== reduce(mapTransformer(fn)(getReducerFromInput(collection)), getSeedFromInput(collection), collection)
```

## examples

#### basic examples

```javascript
import { into } from 'conductor'
import { map } from 'conductor/transformers'

const input = { drummer: 1, drumsticks: 2 }
const double = x => 2 * x

into([], map(double), input) // [2, 4]
```

Here we transformed an input `Object` into an output `Array`, and doubled every value in it. Notice we imported map from conductor/transformers and not from conductor directly, because they are different functions. `into` requires `Transformer` functions, that is functions which accept a reducer and return a new reducer.



#### using a more complex transformer

```javascript
import { into } from 'conductor'

const input = { drummer: 1, drumsticks: 2 }
const transformer = reducer => (acc, value)
    => value % 2 === 0 ? reducer(acc, 2 * value) : acc

into([], transformer, input) // [4]
```

Here our transformer function doubles every even value and discards every odd value. To double the value, we pass the updated value to the reducer alongside with the reducer. To discard it, we simply simply return the accumulator as is.

