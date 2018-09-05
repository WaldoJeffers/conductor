---
description: Merge two items
---

# merge

```erlang
merge :: (Any, Any) -> Any
```

Available since v1.3.0.

### description

Deeply merges two items \(primitives, or object-like values\). For primitives, `merge` will return the right-hand side \(the last argument you pass to the function\). For collections \(`Array, Set, Map, Object`\), merge will recursively merge each value as follows:

* **arrays & sets**: values will be **deduped**
* **objects & maps**: values associated to the same key will be merged recursively using `merge`

Equality between two values is checked using [`equals`](equals.md).

### examples

#### merging two primitives

```javascript
import { merge } from 'conductor'

merge('hello', 'world') // 'world'
merge(2, 'world') // 'world'
merge({ hello: 'hello'}, 'world') // 'world'
```

When the last argument is a primitive, it will always be the returned value.

#### merging two collections

```javascript
import { merge } from 'conductor'

merge(['hello'], ['world']) // ['hello', 'world']
merge(['hello', 'world'], ['world']) // ['hello', 'world']
merge({ hello: 'world' }, { bonjour: 'monde' }) // { hello: 'world', bonjour: 'monde' }
merge({ hello: 'world' }, { hello: 'monde' }) // { hello: 'monde' }
```

When they are merged, collections are deduped by value for Arrays & Sets, and by key for Objects & Maps.

#### merging nested collections

```javascript
import { merge } from 'conductor'

merge({ words: ['hello'] }, { words: ['world'] }) // { words: ['hello', 'world'] }
merge([{ hello: 'world' }], [{ hello: 'world' }]) // [{ hello: 'world' }]
```

Collections are merged recursively using merge. 

