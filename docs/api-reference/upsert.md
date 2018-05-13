---
description: Upsert an item in an array
---

# upsert

```erlang
upsert :: (Function predicate, Any item, Array input) => Array output
```

## description

Inserts or updates \(_upserts_\) an item in an input array. The predicate function checks for the item's existence in the input array. If it does not exist, a new array is returned with the values from the input array and the item appended to them.

{% hint style="info" %}
Like all functions in **conductor**, `upsert` is a pure function and will not modify the input array.
{% endhint %}

## example

### inserting a new value

```javascript
import { upsert } from 'conductor'

const characters = [{ id: 1, name: 'Luke' }]
const han = { id: 2, name: 'Han' }
const hasHan = character => character.id === 2

upsert(hasHan, han, characters) // [{ id: 1, name: 'Luke' }, { id: 2, name: 'Han' }]
```

### updating a value

```javascript
import { upsert } from 'conductor'

const characters = [{ id: 4, firstname: 'Anakin' }]
const darthVader = { id: 4, firstname: 'Darth Vader' }
const hasAnakin = character => character.id === 4

upsert(hasAnakin, handarthVader characters) // [{ id: 4, name: 'Darth Vader' }]
```

