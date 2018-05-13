# type

```erlang
type :: Any input => String type
```

type :: Any input =&gt; String type

## description

Returns the `input`'s type as a **lowercase** string.

## example

```javascript
import { type } from 'conductor'

type('hello') // 'string'
type(2) // 'number'
type(() => {}) // 'function'
type([3, 1, 4]) // 'array'
type({hello: 'world'}) // 'object'
type(new Date()) // 'date'
type(Promise.resolve(42)) // 'promise'
type(new Set()) // 'set'
type(new Map()) // 'map'
```

