---
description: Check if every item in a collection satisfies a predicate
---

# every

```erlang
every :: (Function predicate, Collection collection) => Boolean|Promise<Boolean> output
```

## description

Returns a `Boolean` indicating if every item in the input `collection` satisfies the provided `predicate` function. It works exactly like [`Array.prototype.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), except it also accepts `Sets`, `Maps` & `Objects` as inputs, and _asynchronous_ predicates.

{% hint style="info" %}
Like all functions in **conductor**, this function is automatically is curried. If the predicate is asynchronous, it will return a `Promise`, allowing you to use `Promise.prototype.then` or the `await` keyword to retrieve the result.
{% endhint %}

## examples

### basic example

```javascript
import { every } from 'conductor'

const numbers = [6, 2, 4]
const isEven = number => number % 2 === 0

every(isEven, numbers) // true
```

Here, we simply check if every item in our numbers array is an even number. Luckily, that's the case.

### using other data structures

```javascript
import { every } from 'conductor'

const object = { six: 6, two: 2, four: 4}
const set = new Set([6, 2, 4])
const map = new Map([['six', 6], ['two', 2], ['four', 4]])
const isEven = number => number % 2 === 0

every(isEven, object) // true
every(isEven, set) // true
every(isEven, map) // true
```

`every` also works on `Objects`, `Sets`, and `Maps`.

### using an asynchronous predicate

```javascript
import { every } from 'conductor'

const numbers = [6, 2, 4]
const isEvenAsync = async number => number % 2 === 0

await every(isEvenAsync, numbers) // true
```

Here, our predicate is asynchronous \(notice the `async` keyword before the function definition\), which makes some return a `Promise`. We then \(no pun intended\) simply use the `await` keyword to retrieve the result.

