# curryN

**`curryN :: (Number arity, Function f) -> Function g`**

## description

Returns a [curried version](https://en.wikipedia.org/wiki/Currying) of the provided function. The new function will have the specified arity. `curry` is a _pure function_ and will return a new function, without modifying the original function.

`curryN` is very similar to [`curry`](curry.md), except you need to explictly provide the desired arity. `curry` actually uses `curryN` internally and is defined as follows: `curry = fn => curryN(fn.length, fn)`. In most cases, [`curry`](curry.md) or [`arity`](arity.md) will be better suited to your needs. The only case where you might want to use `curryN` would be if your function's `length` property does not reflect its actual arity \(either because it uses the spread parameter operator, or uses the [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) local variable internally\).

## examples

### basic example

```javascript
import { curryN } from 'conductor'

const multiply = (x, y) => x * y
const times3 = curryN(2, multiply)(3)

times3(5) // 15
```

### 0-arity functions

```javascript
import { curryN } from 'conductor'

function multiply(){
    return arguments[0] * arguments[1]
}
multiply.length // 0
curryN(2, multiply).length // 2 
const times3 = curryN(2, multiply)(3)

times3(5) // 15
```

