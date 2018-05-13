---
description: Filter a collection
---

# filter

```erlang
filter :: (Collection collection, Function predicate) -> Collection | Promise<Collection>
```

## description

Iterates over a _collection_ \(`Array, Object, Map, Set`\) and returns a new collection of the same type containing only the values for which the `predicate` function evaluates to `true`.

Like many `Collection` methods in Conductor, `filter` works with **both asynchronous & synchronous** mappers. If you use a synchronous predicate function, `filter` will work like `Array.prototype.filter` and return a Collection synchronously.

```javascript
const values = [0, 1, 2, 3]
const isEven = x => x % 2 === 0
filter(isEven, values) // [0, 2]
```

If you use an _asynchronous_ mapper, `filter` will return a `Promise`, and you will need to use `await` or `Promise.prototype.then` to retrieve the new collection.

```javascript
const values = [0, 1, 2, 3]
const isEven = async x => x % 2 === 0
filter(double, values) // Promise<Pending>
await filter(double, values) // [0, 2]
```

{% hint style="warning" %}
If you use an _asynchronous_ predicate function, all calls to the `predicate` function will be done in **parallel**, but the input collection's **order will be preserved**.
{% endhint %}

## examples

### basic example

```javascript
import { filter } from 'conductor'

const values = [0, 1, 2, 3]
const isEven = x => x % 2 === 0
filter(isEven, values) // [0, 2]
```

Here, we are just using filtering on an array to keep only even values. The predicate function is synchronous.

### other data structures

```javascript
import { filter } from 'conductor'

const object = { drummer: 1, drumsticks: 2 }
const map = new Map([['drummer', 1], ['drumsticks', 2]])
const set = new Set([0, 1, 2, 3])
const isEven = x => x % 2 === 0
filter(isEven, object) // { drumsticks: 2 }
filter(isEven, map) // Map { 'drumsticks' => 2 }
filter(isEven, set) // Set { 0, 2 }
```

### using the index in the predicate function

```javascript
import { filter } from 'conductor'

const words = ['hello', 'hello', 'world', 'world']
const isEven = x => x % 2 === 0
filter((_, index) => isEven(index), words) // ['hello', 'world']
```

### using an asynchronous predicate

```javascript
import { filter } from 'conductor'

const values = [0, 1, 2, 3]
const isEven = async x => x % 2 === 0
await filter(double, values) // [0, 2]
```

If your predicate function is _asynchronous_, you will need to use `await` \(or `Promise.prototype.then`\) because the result will be a `Promise`.
