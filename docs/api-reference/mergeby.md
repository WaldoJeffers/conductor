---
description: Merge two collections using the provided key
---

# mergeBy

### description

`mergeBy` works like [`merge`](merge.md), but uses an additional parameter \(`getter`\) to retrieve the value used for comparison. This additional parameter can be provided as a `Function`, or a `String` in which case mergeBy will retrieve the value associated to the provided key.

### examples

#### providing a key name as a string

```javascript
import { mergeBy } from 'conductor'

const arr1 = [{ id: 1, name: 'Anakin' }]
const arr2 = [{ id: 1, name: 'Darth Vader', side: 'dark' }]

mergeBy('id', obj1, obj2) // [{ id: 1, name: 'Darth Vader', side: 'dark' }]
mergeBy('name', obj1, obj2)
// [
//    { id: 1, name: 'Anakin' },
//    { id: 1, name: 'Darth Vader', side: 'dark' }
// ]
```

#### providing a function

```javascript
import { get, mergeBy } from 'conductor'

const arr1 = [{ id: 1, name: 'Anakin' }]
const arr2 = [{ id: 1, name: 'Darth Vader', side: 'dark' }]

mergeBy(get('id'), obj1, obj2) // [{ id: 1, name: 'Darth Vader', side: 'dark' }]
mergeBy(get('name'), obj1, obj2)
// [
//    { id: 1, name: 'Anakin' },
//    { id: 1, name: 'Darth Vader', side: 'dark' }
// ]
```

