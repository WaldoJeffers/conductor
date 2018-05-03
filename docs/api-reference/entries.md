---
description: Returns a collection's entries
---

# entries

**`entries :: Collection collection -> Array entries`**

## description

Returns a `Collection` \(`Array | Set | Object | Map`\)'s entries as bi-dimensional array of `[key, value]` pairs.

## example

#### array

```javascript
import { entries } from 'conductor'

entries([3, 1, 4]) // [[0, 3], [1, 1], [2, 4]]
```

#### set

```javascript
import { entries } from 'conductor'

entries(new Set([3, 1, 4])) // [[3, 3], [1, 1], [4, 4]]
```

{% hint style="warning" %}
For Sets, the key is equal to the value
{% endhint %}

#### object

```javascript
import { entries } from 'conductor'

entries({hello: 3, world: 1}) // [['hello', 3], ['world', 1]]
```

#### map

```javascript
import { entries } from 'conductor'

entries(new Map([['hello', 3], ['world', 1]])) // [['hello', 3], ['world', 1]]
```

