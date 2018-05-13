---
description: Check if a value is a Promise
---

# isPromise

`isPromise :: Any value => Boolean result`****

## description

Returns `true` if the provided value is a `Promise`, `false` otherwise.

## example

```javascript
import { isPromise } from 'conductor'

isPromise(42) // false
isPromise(Promise.resolve(42)) // true
```

