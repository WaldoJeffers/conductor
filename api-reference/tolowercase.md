---
description: Convert a string to lowercase
---

# toLowerCase

**`toLowerCase :: String input => String output`**

## description

Returns the input string as a lower case string. It works exactly like [`String.prototype.toLowerCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) and simply avoiding writing non point-free functions, which can be harder to read in function composition chains, such as `compose(str => str.toLowerCase(), get('hello'))({hello: 'WoRlD'})`.

## example

```javascript
import { toLowerCase } from 'conductor'

toLowerCase('HeLlO') // 'hello'
```

