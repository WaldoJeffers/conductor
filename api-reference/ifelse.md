# ifElse

**`ifElse :: (Function predicate, Function ifTrue, Function, ifFalse) -> (a, b, ..., z) -> Any | Promise<Any> value`**

## description

Accepts a predicate function, an ifTrue & an ifFalse branch functions, and returns a function which will pass all the arguments it receives to the `ifTrue` branch function if the predicate evaluates to a truthy value, or to the `ifFalse` branch function.

If the predicate is an _asynchronous_ function, the returned function will return a `Promise` , allowing to use `Promise.prototype.then` or the `await` keyword to wait until it's resolved.

## examples

#### basic example

```javascript
import { ifElse } from 'conductor'

const isEven = x => x % 2 === 0
const double = x => 2 * x
const add1 = x => 1 + x

ifElse(isEven, double, add1)(2) // 4
ifElse(isEven, double, add1)(1) // 2
```

#### passing more than one argument

```javascript
import { ifElse } from 'conductor'

const hasProp = (key, object) => Object.prototype.hasOwnProperty.call(object, key)
const returnAsIs = (_, object) => object
const addProp = (key, object, value) => {
    object[key] = value
    return object
}
const insertOnce = ifElse(hasProp, returnAsIs, addProp)

insertOnce('role', {}, 'guitarist') // { role: 'drummer' }
insertOnce('role', { role: 'drummer' }, 'guitarist') // { role: 'drummer' }
```

We want to build a function which adds a property \(a key & a value\) to an object, but only if the property does not already exist on the object. 

The `hasProp` function is our predicate, and will check if a property exists on an object.

The `returnAsIs` is our \`iftrue  

