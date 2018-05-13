# always

`always :: Any value -> () -> Any value`

## description

Returns a function which will always \(hence the name\) return the value you passed initially.

## example

```javascript
import { always } from 'conductor'

const always2 = always(2)

always2() // 2
always2(8) // 2
always2(null) // 2
```

