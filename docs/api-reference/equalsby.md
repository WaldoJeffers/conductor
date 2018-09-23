# equalsBy

{% hint style="info" %}
Available since v1.4.0
{% endhint %}

### description

```erlang
equalsBy :: (Function | String getter, Any item1, Any item2) => Boolean
```

Returns `true` if the values returned by the getter are equals on both items. The `getter` can be provided as a `Function` or a `String`. If `getter` is a Function, then `equalsBy` will retrieve the comparison value from both items using the provided function. If it is a `String`, then `equalsBy` will use it as a key and retrieve the value associated to this key on both items. `equalsBy` uses [`equals`](equals.md) internally to compare the two values returned by `getter`.

### examples

#### providing a key name as a string

```javascript
import { equalsBy } from 'conductor'

const obj1 = { id: 1, name: 'Anakin' }
const obj2 = { id: 1, name: 'Darth Vader' }

equalsBy('id', obj1, obj2) // true
equalsBy('name', obj1, obj2) // false
```

#### using a function as getter

```javascript
import { equalsBy } from 'conductor'
import { get } from 'conductor'

const obj1 = { id: 1, name: 'Anakin' }
const obj2 = { id: 1, name: 'Darth Vader' }

equalsBy(get('id'), obj1, obj2) // true
equalsBy(get('name'), obj1, obj2) // false
```

