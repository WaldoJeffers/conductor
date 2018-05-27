---
description: Run several functions in parallel
---

# branch

```erlang
branch :: (Function f, Function g, Function h, ...)
    => (a, b, c, ...)
    => Array [f(a, b, c, ...), g(a, b, c, ...), h(a, b, c, ...), ...]
```

## description

`branch` takes as many functions as you want as parameters and creates branches \(think Git branches\) with them. It returns a new function which will forward whatever arguments are passed to the different branches you created, and return an array where each item is the result of a branch function. The branches are run in _parallel_.

## example

```javascript
import { branch } from 'conductor'

const numbers = [1, 3, 5]
const sum = (...args) => args.reduce((a, b) => a + b)
const multiply = (...args) => args.reduce((a, b) => a * b)
const sumAndMultiply = branch(sum, multiply)

sumAndMultiply(numbers) // [9, 15]
```

