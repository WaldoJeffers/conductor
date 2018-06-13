---
description: Deeply flatten a collection
---

# flatten

```erlang
flatten :: Collection -> Collection
```

### description

Deeply flattens a Collection \(`Array | Set | Map | Object`\).

### examples

#### array

```javascript
import { flatten } from 'conductor'

const array = [1, [2, [3]]]
flatten(array) // [1, 2, 3]
```

#### object

```javascript
import { flatten } from 'conductor'

const object = { a: { b: { c: 3 } } }
flatten(array) // { 'a.b.c': 3 }
```

#### set

```javascript
import { flatten } from 'conductor'

const set = new Set([1, [2, [3]]])
flatten(set) // Set{1, 2, 3}
```

#### map

```javascript
import { flatten } from 'conductor'

const map = new Map([['a', new Map([['b', new Map(['c', 3])])])
flatten(array) // Map{ 'a.b.c' => 3 }
```

