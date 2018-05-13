# flip

`flip :: Function f -> Function g`

## description

Returns a new function function which expects the same parameters as the provided one, but in reverse order. It's often useful to create partially applied functions where the known argument is not the first one.

## examples

### basic example

```javascript
import { flip } from 'conductor'

const minus = (a, b) => a - b
flip(minus)(3, 10) // 7
```

### creating a partially applied function

```javascript
import { apply, map, flip } from 'conductor'

const numbers = [7, 5]
const add = (a, b) => a + b
const multiply = (a, b) => a * b
const operations = [add, multiply]
const applyOperation = flip(apply)(numbers)

map(applyOperation, operations) // [12, 35]
```

Let's say we have an array of numbers, which we'll call `numbers` and an array of operations \(`add` & `multiply`\), which we'll call `operations`. We want to map over `operations`, and pass our `numbers` array as parameters to _each_ of these two functions. Intuitively, me might write something like:

`map(operation => operation(...numbers), operations)`

This is great, but it's not point-free, and we have to use the spread operator, because our operations do not accept arrays. We suddenly remember that there is an `apply` function which allows to pass parameters to functions as arrays. Sadly, its signature is: `(Function fn, Array parameters)` and in our case, the second argument is the one which constant in every map iteration. But using `flip`, we're able to get a new function which signature is `(Array parameters, Function fn)`, and as an added bonus, this function is also curried! So we can elegantly define our partially applied function `applyOperation` and use directly in our `map` function in a point-free notation.

