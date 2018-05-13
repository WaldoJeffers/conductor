# some

**`some :: (Function predicate, Collection collection) => Boolean|Promise<Boolean> output`**

## description

Returns a `Boolean` indicating if at least one item in the input `collection` satisfies the provided `predicate` function. It works exactly like [`Array.prototype.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some), except it also accepts `Sets`, `Maps` & `Objects` as inputs, and _asynchronous_ predicates.

{% hint style="info" %}
Like all functions in **conductor**, this function is automatically is curried. If the predicate is asynchronous, it will return a `Promise`, allowing you to use `Promise.prototype.then` or the `await` keyword to retrieve the result.
{% endhint %}

## examples

#### basic example

```javascript
import { some } from 'conductor'

const numbers = [3, 1, 4]
const isEven = number => number % 2 === 0

some(isEven, numbers) // true
```

Here, we simply check if at least one item in our numbers array is an even number. Luckily, that's the case.

#### using other data structures

```javascript
import { some } from 'conductor'

const object = { three: 3, one: 1, four: 4}
const set = new Set([3, 1, 4])
const map = new Map([['three', 3], ['one', 1], ['four', 4]])
const isEven = number => number % 2 === 0

some(isEven, object) // true
some(isEven, set) // true
some(isEven, map) // true
```

`some` also works on `Objects`, `Sets`, and `Maps`.

#### using an asynchronous predicate

```javascript
import { some } from 'conductor'

const numbers = [3, 1, 4]
const isEvenAsync = async number => number % 2 === 0

await some(isEvenAsync, numbers) // true
```

Here, our predicate is asynchronous \(notice the `async` keyword before the function definition\), which makes some return a `Promise`. We then \(no pun intended\) simply use the `await` keyword to retrieve the result.

