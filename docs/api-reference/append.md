---
description: Add an item at the end of an array
---

# append

```erlang
append :: (Any item, Array input) => Array output
```

## description

Add an item at the **end** of an array. `append` is a _pure function_ and will return a new array, without modifying the original array. Like many functions in **conductor**, `append` is curried.

## example

```javascript
import { append } from 'conductor'

append('world', ['hello']) // ['hello', 'world']
append('world')(['hello']) // ['hello', 'world']
```

