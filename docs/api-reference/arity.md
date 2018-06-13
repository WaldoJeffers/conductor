---
description: Change a function's arity
---

# arity

```erlang
arity :: (Number length, Function fn) => Function fn
```

## description

Returns a new function whose arity will be the first argument you provide to `arity` and which will return the same result as the provided function. A good use case is when you want to limit how many arguments will passed to your function, if you do not control the context in which it is called.

## example

```javascript
import { arity } from 'conductor'

const words = ['hello', 'world']

words.forEach(console.log)
// 'hello' 0 ['hello', 'world']
// 'world' 1 ['hello', 'world']

words.forEach(arity(1, console.log))
// 'hello'
// 'world'
```

