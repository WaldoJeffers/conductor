---
description: Add an item at the beginning of an array
---

# prepend

`prepend :: (Any item, Array input) => Array output`

## description

Returns a new `Array` after adding the item at the beginning of the input array.

## example

```javascript
import { prepend } from 'conductor'

const numbers = [1, 4]
prepend(3, numbers) // [3, 1, 4]
```
