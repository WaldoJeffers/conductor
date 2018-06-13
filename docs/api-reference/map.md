---
description: Map a collection to another one
---

# map

```erlang
map :: (Function mapper, Collection collection) => Collection | Promise<Collection>
```

## description

Iterates over a _collection_ \(`Array, Object, Map, Set`\) and returns a new collection of the same type containing each value from the input collection after it has been transformed by the provided _mapper_ function.

Like many `Collection` methods in Conductor, `map` works with **both asynchronous & synchronous** mappers. If you use a synchronous mapper, `map` will work like `Array.prototype.map` and return a Collection synchronously.

```javascript
const values = [0, 2, 4]
const double = x => 2 * x
map(double, values) // [0, 4, 8]
```

If you use an _asynchronous_ mapper, `map` will return a `Promise`, and you will need to use `await` or `Promise.prototype.then` to retrieve the new collection.

```javascript
const values = [0, 2, 4]
const double = async x => 2 * x
map(double, values) // Promise<Pending>
await map(double, values) // [0, 4, 8]
```

**Important**

If you use an _asynchronous_ mapper, all `mapper` calls will be done in **parallel**, but the input collection's **order will be preserved**.

