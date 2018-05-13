# get

```erlang
get :: (Any key, Collection collection) => Any value
```

## description

Returns the value of the item associated to the provided key. The key will the item's index if the collection is an `Array`, the item's key if the collection is an `Object` or a `Map`, or the item's value if the collection is a `Set` \(because keys and values are identical in `Sets`\).

Like all functions in **conductor, **`get` is curried.

## examples

### basic example

```javascript
import { get } from 'conductor'

const items = ['hello', 'world']
get(1, items) // 'world'
```

Here we simply retrieve the item at the index 1 in our array.

### working with other data structures

```javascript
import { get } from 'conductor'

const set = new Set(['hello', 'world'])
const object = { drumsticks: 2 }
const map = new Map([['drumsticks', 2]])
get('world', set) // 'world'
get('drumsticks', object) // 2
get('drumsticks', map) // 2
```

`get` works on `Collection` types: Arrays, Maps, Sets and Objects.

### currying

```javascript
import { get, map } from 'conductor'

const characters = [{ name: 'Luke' }, { name: 'Han' }]
map(get('name'), characters) // ['Luke', 'Han']
```

`get` is very often used in its partially applied form, which allows you to write very minimalistic & reusable code. Here `get('name')` returns a function which will retrieve the `name` property on the item's value. This function is then passed to `map`, which calls it with an item at each iteration.

