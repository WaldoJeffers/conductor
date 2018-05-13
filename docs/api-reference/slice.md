---
description: Extract a fragment on an array
---

# slice

**`slice :: (Number start, Number end, Array input) => Array output`**

## description

Returns a new array, which is the fragment of the `input` array between the `start` & `end` indexes. `slice` works exactly like [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

{% hint style="info" %}
Like many methods in **conductor**, `slice` is a _pure function_ and is automatically _curried_. 
{% endhint %}

## example

```javascript
import { slice } from 'conductor'

const words = ['Hello', 'Bonsoir', 'Elliot', 'World']
slice(1, 3, words) // ['Bonsoir', 'Elliot']
```

Here, we simply retrieve all the words which are between the index `1` \(inclusively\) and the index `3` \(exclusively\).

