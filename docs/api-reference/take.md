# take

```erlang
take :: (Integer count, Array input) => Array output
```

{% hint style="info" %}
Available since v1.5.0
{% endhint %}

## description

`take` returns a new array only keeping the first `count` elements of the input array. If `count` is _negative_, `take` returns the last `count` elements.

[See source code](https://github.com/WaldoJeffers/conductor/blob/master/src/take.js)

## examples

### using a positive count argument

```javascript
import { take } from 'conductor'

take(2, [1, 2, 3]) // [1, 2]
```

### using a negative count argument

```javascript
import { take } from 'conductor'

take(-2, [1, 2, 3]) // [2, 3]
```

### using a count argument greater than the array's length

```javascript
import { take } from 'conductor'

take(100, [1, 2, 3]) // [1, 2, 3]
```

