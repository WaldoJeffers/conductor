# apply

```erlang
apply :: (Function fn, Array args) => Any value
```

## description

Returns the result of calling the provided function with its arguments, which are passed as an array. `apply` works very similarly to [Function.prototype.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), with the notable difference that you can not provide a value for `this`. `apply(f, args)` is equivalent to `f(...args)`, using [ES6's spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

## example

```javascript
import { apply } from 'conductor'

const numbers = [2, 1, 8, 3, 12]

apply(Math.max, numbers) // 12
```

