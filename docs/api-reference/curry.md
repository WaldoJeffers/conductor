---
description: Curry a function
---

# curry

```text
curry :: Function f => Function g
```

## description

Returns a [curried version](https://en.wikipedia.org/wiki/Currying) of the provided function. Currying is a very important concept in functional programming: it enables [partial application](https://en.wikipedia.org/wiki/Partial_application), which in turn allows you to reuse these partially-applied functions and to avoid code repetition. `curry` is a _pure function_ and will return a new function, without modifying the original function. The new function will have the same arity as the original one did.

`curry` does a little more than classic currying: the returned function can actually accept more than one argument. It can accept from one up to as many as the original function did.

## examples

### basic example

```javascript
import { curry } from 'conductor'

const multiply = (x, y) => x * y
const times2 = curry(multiply)(2)

times2(5) // 10
```

### arity preservation

```javascript
import { curry } from 'conductor'

const multiply = (x, y) => x * y
multiply.length // 2
curry(multiply).length // 2
```

The resulting function has the same arity as the original.

### deep currying

```javascript
import { curry } from 'conductor'

const add = (a, b, c, d) => a + b + c + d
const addCurried = curry(add)
addCurried(1) // Function
addCurried(1)(2) // Function
addCurried(1)(2)(3) // Function
addCurried(1)(2)(3)(4) // 10
```

### passing more than one argument

```javascript
import { curry } from 'conductor'

const add = (a, b, c) => a + b + c
const add3 = curry(add)(1, 2)
add3(3) // 6
```

