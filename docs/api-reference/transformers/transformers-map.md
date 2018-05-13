---
description: Create a mapping transformer
---

# transformers/map

**`transformers/map :: Function mapper => (Reducer input => Reducer output)`**

## description

Returns a _mapping_ `Transformer`, which will map an item to another, exactly like Array.prototype.map, but instead returning a decorated reducer. `transformers/map` accepts a `mapper` function and returns another transformer function.

## example

#### basic example

```javascript
import { map, transduce } from 'conductor/transformers'

const numbers = [3, 1, 4]
const double = x => 2 * x
const add = (acc, value) => acc + value

transduce(map(double), add, 0, numbers) // 16
```

