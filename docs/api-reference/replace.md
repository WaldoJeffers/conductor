---
description: Replace an item in array
---

# replace

`replace :: (Number index, Any value, Array input) => Array output`

## description

Returns a new array after replacing the value at the provided `index` with the provided `value` in the `input` array. If the index is not found, the input array is simply \(shallow\) cloned.

Like nearly all methods in conductor, replace is a pure function and will not modify the input array.

{% hint style="info" %}
Like nearly all methods in **conductor**, `replace` is a _pure function_ and will not modify the input array.
{% endhint %}

## example

```javascript
import { replace } from 'conductor'

const numbers = [3, 1, 1]
replace(2, 4, numbers) // [3, 1, 4]
```

Here, we simply replaced the value at index `2` by the value 4.

