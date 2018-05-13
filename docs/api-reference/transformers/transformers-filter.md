---
description: Create a filtering transformer
---

# transformers/filter

`transformers/filter :: Function predicate => (Reducer input => Reducer output)`

## description

Returns a _filtering_ `Transformer`, which will filter items using the provided predicate, exactly like `Array.prototype.filter`, but instead returning a decorated reducer. `transformers/filter` accepts a `predicate` function and returns another transformer function.

## example

### basic example

```javascript
import { filter, transduce } from 'conductor/transformers'

const numbers = [3, 1, 4]
const isEven = x => x % 2 === 0
const add = (acc, value) => acc + value

transduce(filter(isEven), add, 0, numbers) // 4
```

