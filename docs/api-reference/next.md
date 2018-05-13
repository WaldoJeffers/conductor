# next

`next :: Iterator iterator => Any value`

## description

Returns the next value of an [`Iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol). It's functionnally equivalent to `iterator => iterator.next().value`.

## example

```javascript
import { next } from 'conductor'

const numbers = [3, 1, 4]
next(numbers) // 3
next(numbers) // 1
next(numbers) // 4
next(numbers) // undefined
```

