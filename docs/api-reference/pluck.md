---
description: Flatten a collection of collections
---

# pluck

```javascript
pluck :: (Any key, Collection<Collections> input) => Collection<Any> output
```

## description

Returns a new flattened `Collection` from an input collection of collections. The input collection is flattened by returning the value associated to the provided key of each inner collection. More simply put, `pluck(key) = map(collection => collection[key])`.

## example

```javascript
import { pluck } from 'conductor'

const characters = [{ id: 1, name: 'Luke' }, { id: 2, name: 'Han' }]
pluck('name', characters) // ['Luke', 'Han']
```

Suppose we have a collection of `characters`, each having a `name` and an `id`. Here, we're only interested in retrieving their names, so we flatten the input collection by returning the `name` property of each character.

