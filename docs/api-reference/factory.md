---
description: Create a factory function
---

# factory

```erlang
flatten :: Object specification => (Any, Any, ...) -> Object
```

## description

Create a factory function using the provided specification object. The `factory` method has 2 magical powers:

* the specification object can contain constant values, but also functions which will be called everytime the factory function is called \(arguments will be passed as-is\)
* the specification object can be nested: `factory` works recursively.

## examples

### constant values

```javascript
import { factory } from 'conductor'

const spec = { name: 'Elliot', type: 'hacker' }
const Hacker = factory(spec)
Hacker() // { name: 'Elliot', type: 'hacker' }
```

### function values

```javascript
import { factory } from 'conductor'

const spec = { name: x => x, createdAt: () => Date.now() }
const Hacker = factory(spec)
Hacker('Elliot') // { name: 'Elliot', createdAt: 1529249582304 }
```

### nested specification

```javascript
import { factory } from 'conductor'

const spec = {
  id: 1,
  name: x => x,
  metadata: {
    createdAt: () => Date.now(),
    type: 'hacker'
  }
const Hacker = factory(spec)
Hacker('Elliot')
// {
//   id: 1,
//   name: 'Elliot',
//   metadata: {
//     createdAt: 1529249582304,
//     type: 'hacker'
//   }
// }
```

