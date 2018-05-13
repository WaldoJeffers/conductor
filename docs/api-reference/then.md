---
description: Call a function after some some has executed
---

# then

```erlang
then :: (Function fn, Any|Promise<Any> input) => Any|Promise<Any> output
```

## description

A utility function which will call the provided function `fn` with the `input` as soon as the input's value is available: if the `input` is not a `Promise`, `then(fn, input)` is equivalent to `fn(input)`. Otherwise, it's equivalent `value.then(fn)`. It can be useful in a function composition chain if you're unsure as to whether the input value will be a `Promise` or not. It's mostly used internally in **conductor**.

{% hint style="warning" %}
If your value is a `Promise`, then's result will also be a `Promise`, so you'll need to use the `await` keyword or `Promise.prototype.then`. Since `then`'s purpose is to execute code when you're unsure as if the input is actually a `Promise`, this can seem paradoxal. However, the `await` keyword will work seamlessly on `Promise` or non-`Promise` values.
{% endhint %}

## example

#### synchronous example

```javascript
import { then } from 'conductor'

const double = x => 2 * x
then(double, 2) // 4
```

Here, our input value \(`2`\) is not a `Promise`, so this code is equivalent to double\(2\).

#### asynchronous example

```javascript
import { then } from 'conductor'

const double = x => 2 * x
then(double, Promise.resolve(2)) // Promise<pending>
await(double, Promise.resolve(2)) // 4
```

Here, our input value \(`Promise.resolve(2)`\) is a `Promise`, so then returns a `Promise`. If you try calling it without using the `await` keyword or `Promise.prototype.then`, the result will be a `Promise`.

