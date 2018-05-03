# dump

**`dump: (Transformer fn, Collection input) -> Collection output`**

## description

Transforms a `Collection` into a new `Collection` using the provided transformer function.

## example

```javascript
import { dump } from 'conductor'
import { map } from 'conductor/transformers'

const times2 = x => 2 * x
dump(map(times2), [3, 1, 4]) // [6, 2, 8]
```



