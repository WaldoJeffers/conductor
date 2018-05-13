# compose

**`compose :: (Function f, Function g, ...) -> Function f ∘ g ∘ ...`**

## description

Returns a function which composes its given parameter functions **right to left**. [Function composition](https://en.wikipedia.org/wiki/Function_composition) is at the heart of functional programming, and that's why it is one of **conductor**'s most important functions.

But that's not all! `compose` also has magic powers: it composes _synchronous_ functions, _asynchronous_ functions or even a mix of both! It accepts as many arguments as the rightmost function does, and has the same [arity](https://en.wikipedia.org/wiki/Arity).

## examples

### basic example

```javascript
import { compose } from 'conductor'

const times2 = x => 2 * x
const minus3 = x => x - 3

compose(minus3, times2)(5) // 7 === (2 * 5) - 3 : functions are composed right to left
```

### arity preservation

```javascript
import {compose} from '@waldojeffers/conductor'

const multiply = (x, y) => x * y
const minus3 = x => x - 3

compose(minus3, multiply)(2, 5) // 7 === (2 * 5) - 3
compose(minus3, multiply)(2)(5) // 7
compose(minus3, multiply).length // 2
```

Even if `multiply` and `minus3` do not accept the same number of arguments, `compose` will help you make their composition a breeze! It will simply accept as many arguments as `multiply` does : 2. You can verify that by accessing the `length` property on the composition's result. Even better, `compose`'s result will be curried, even if its rightmost argument is not.

### synchronous and asynchronous function composition

```javascript
import {compose} from '@waldojeffers/conductor'

const times2 = x => 2 * x
const minus3 = x => 3 * x
const times2Async = async x => times2(x) // async keyword makes it return a Promise
const minus3Async = async x => minus3(x) // async keyword makes it return a Promise

compose(minus3, times2)(5) // 7
await compose(minus3Async, times2Async)(2, 5) // 7 : we need to await because it is an async function
await compose(minus3, times2Async) // 7
await compose(minus3Async, times2) // 7
```

Even if `multiply` and `minus3` do not accept the same number of arguments, `compose` will help you make their composition a breeze! It will simply accept as many arguments as `multiply` does : 2. You can verify this by accessing the `length` property on the composition's result. Even better, `compose`'s result will be curried, even if its rightmost argument is not.

