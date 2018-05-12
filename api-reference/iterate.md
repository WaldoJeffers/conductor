# iterate

**`iterate :: Iterable => () => Any value`**

## description

Returns a function which iterate over an [`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) by calling its next method every time it is called. iterate is rarely useful by itself. However, it can be extremely useful when trying to iterate simultaneously over multiple iterables to combine them.

## example

#### basic example

```javascript
import { iterate } from 'conductor'

const array = [2, 4]
const iterator = array.values()
iterate(iterator)() // 2
```

Here, we simply get an `Iterable` from an array by calling its `values` method. Then, we execute iterate and call its result. It returns the array's first value.

#### iterating simultaneously over two collections

```javascript
import { filter, iterate } 'conductor'

const characters = ['Luke', 'Han', 'Darth Vader']
const isGood = [true, true, false]
const iterable = isGood.values()
const predicate = iterate(iterable)

filter(predicate, characters) // ['Luke', 'Han']
```

Let's say we have an array of characters, `characters`,  and another one, `isGood`, which indicates if each character is indeed good. We need to filter the characters to keep only the good guys, so we need to iterate simultaneously over the two collections. Let's get an `Iterable` out of our `isGood` array. Then, let's call `iterate` on it. This will be our predicate function: each time it will be called by `filter` while iterating over our `characters` array, it will return the next value from `isGood`, indicating if the current character is one the good guys.

