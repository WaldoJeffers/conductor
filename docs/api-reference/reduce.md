---
description: Reduce a collection
---

# reduce

```erlang
reduce :: (Function reducer, Any seed, Collection collection) => Any|Promise<Any> output
```

## description

Returns an output value after combining an input collection's values using the provided reducer function. It works very similarly to [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), excepts it also works on Objects, Sets, and Maps. It also accepts an _asynchronous_ reducer.

The reducer function should have the following signature `(Any accumulator, Any value, Any key, Collection collection) => Any` where:

* `accumulator` is the the result of calling the reducer successively on the previous items of the input collection
* `value` is the value of the current item
* `key` is the key of the current item
* `collection` is the input collection

The `seed` parameter is used as the value for `accumulator` on the `reducer's` first call.

{% hint style="warning" %}
Contrary to [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), the `seed` parameter is not optional.
{% endhint %}

If the reducer is _asynchronous_, the result will be a `Promise`. Use `Promise.prototype.then` or the `await` keyword to retrieve its inner value.

{% hint style="info" %}
`reduce` processes its calls to the reducer in **series**, because each of this call requires an up-to-date version of the `accumulator`.

If you find yourself in a situation where you want the calls to be made in **parallel**, you can compose map and reduce to achieve the desired result: `compose(reduce(syncReducer), map(asyncMapper))`.
{% endhint %}

## example

### basic example

```javascript
import { reduce } from 'conductor'

const numbers = [3, 1, 4]
const sum = (accumulator, value) => accumulator + value
const seed = 0

reduce(add, seed, numbers) // 8
```

Here, we simply want to sum an array of numbers, so we define our reducer, sum, which will add the current item's value of the result of the previous iterations.

Internally, sum will be called with the following parameters

1. `sum(0, 3) // 3`  0 is the `seed` value, and 3 is the value of the array's first item
2. `sum(3, 1) // 4`  The result of the previous iterations is 3, and the value of the array's second item is 4
3. `sum(4, 4) // 8`  The `accumulator`'s value is now 4, and we want to add 4 to it. The iteration is done.

The final result is 8.

### reducing other data structures

```javascript
import { reduce } from 'conductor'

const words = { word1: 'Bonsoir,' word2: 'Elliot' }
const concat = (accumulator, word) => accumulator + ' ' + word
const seed = ''

reduce(concat, '', words) // 'Bonsoir, Elliot'
```

`reduce` also works on `Objects`, `Sets` and `Maps`.

### using an asynchronous reducer

```javascript
import { reduce } from 'conductor'

const starships = [
  {id: 10, name: 'Millenium Falcon'},
  {id: 11, name: 'Y-Wing'},
  {id: 12, name: 'X-Wing'}
]
const fetchCapacity = id =>
  fetch('https://swapi.co/api/starships/' + id)
  .then(res => res.json())
  .then(starship => starship.cargo_capacity)
const sumCapacity = (accumulator, starship) =>
  fetchCapacity(starship.id)
  .then(capacity => accumulator + capacity)

await reduce(sumCapacity, 0, starships) // 100220
```

Let's say we have an array of starships, and want to know their total combined cargo capacity. Since the data is not locally available, we need to retrieve it from the [Star Wars API](https://swapi.co/api/starships/). Our `fetchCapacity` utility function will simply fetch a starship's data from its id and return its capacity. Since it needs to make an HTTP request, it's obviously _asynchronous_. Then, we can define `sumCapacity`, which will be our reducer, and whose task will be to fetch the current starship's capacity and add it to the accumulator. Because our reducer is _asynchronous_, we need to use the await keyword to wait until all the underlying Promises are resolved.

### optimizing the previous example

In our previous example, our reducer is asynchronous because we need to make an HTTP request to retrieve each starship's data. However, since our real reducing operation is simply an addition, which is a commutative operation, we could make the HTTP requests in parallel and add the capacities synchronously after all the remote data has been fetched.

```javascript
import { compose, map, reduce } from 'conductor'

const starships = [
  {id: 10, name: 'Millenium Falcon'},
  {id: 11, name: 'Y-Wing'},
  {id: 12, name: 'X-Wing'}
]
const fetchCapacity = id =>
  fetch('https://swapi.co/api/starships/' + id)
  .then(res => res.json())
  .then(starship => starship.cargo_capacity)
const sumCapacity = (accumulator, value ) = accumulator + value

await compose(reduce(sumCapacity, 0), map(fetchCapacity))(starships) // 100220
```

To do so, we can compose map, which will make the HTTP requests in parallel, and reduce, which will sum the capacities. `map(fetchCapacity)` returns an array of capacities, which `reduce(sumCapacity, 0)`, used in a partially applied form, will accept as the input collection. The mapping operation is _asynchronous_, while the summing operation is _synchronous_. The composition of the two operations is _asynchronous_, which is why we must use the `await` keyword to retrieve the end result.

