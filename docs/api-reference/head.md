---
description: Get the first item in a collection
---

# head

```erlang
head :: Collection collection -> Any value
```

## description

Returns the first item in a `Collection`.

## example

### basic example

```javascript
import { head } from 'conductor'

const items = ['hello', 'world']
head(items) // 'hello'
```

### using other data structures

```javascript
import { head } from 'conductor'

const map = new Map([['drumsticks', 2]])
const object = { drumsticks: 2, drummer: 'James M' }
const set = new Set(['drumsticks', 'drummer'])
head(map) // 2
head(object) // 2
head(set) // 'drumsticks'
```

