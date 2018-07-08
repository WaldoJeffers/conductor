# concat

```erlang
concat :: (A, A) -> A
```

### description

Concatenate two elements of the same type: Arrays, Objects, Sets, Maps, Strings... without _intentionally_ deduping elements: Arrays will be concatenated and may contain duplicates, Objects and Maps will be merged, and Sets will be concatenated without duplicates because Sets themselves can not contain duplicate elements.

{% hint style="warning" %}
`concat` will use the [addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_%28%29) if it has no better option with the input type you provided.
{% endhint %}

### examples

#### arrays

```javascript
import { concat } from 'conductor'

const a = [1, 2]
const b = [2, 3]
concat(a, b) // [1, 2, 2, 3]
```

#### objects

```javascript
import { concat } from 'conductor'

const a = { hello: 'Bonsoir', world: 'world' }
const b = { world: 'Elliot' }
concat(a, b) // { hello: 'Bonsoir, world: 'Elliot' }
```

#### strings

```javascript
import { concat } from 'conductor'

const a = 'Bonsoir, '
const b = 'Elliot'
concat(a, b) // 'Bonsoir, Elliot'
```

#### sets

```javascript
import { concat } from 'conductor'

const a = new Set([1, 2])
const b = new Set([2, 3])
concat(a, b) // Set {1, 2, 3}
```

