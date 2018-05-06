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

Here, we want wrote a function that doubles an input value if it's even, or simply add one if it's odd.

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

insertOnce('role', {}, 'drummer') // { role: 'drummer' }
insertOnce('role', { role: 'drummer' }, 'guitarist') // { role: 'drummer' }
```

We want to build an `insertOnce` function which adds a property \(a key & a value\) to an object, but only if the property does not already exist on the object. 

* The `hasProp` function is our predicate, and will check if a property exists on an object.
* The `returnAsIs` is our `ifTrue` branch and will simply return the object as is.
* `addProp` is our `ifFalse` branch function and will add a property to the object

These functions do not need the same arguments but remember that `ifElse`'s resulting function will pass _all_ the arguments it receives to the `predicate`, `ifTrue` & `ifFalse` functions, so as long as these  functions expect their arguments in the same order, it won't be a problem.

In the first call to `insertOnce`, the object is empty, so the `role` property is added.

In the second call, the object already has a `role` property, so its value is **not** overridden.

#### using an asynchronous predicate function

```javascript
import { ifElse } from 'conductor'

const isEven = async x => x % 2 === 0
const double = x => 2 * x
const add1 = x => 1 + x

ifElse(isEven, double, add1)(3) // Promise<pending>
await ifElse(isEven, double, add1)(3) // 4
```

Here our `isEven` predicate is an asynchronous function. If we call `ifElse` without waiting for the returned `Promise` to be resolved, we simply get the pending `Promise`. So we need to use the `await` keyword \(or `Promise.prototype.then`\) to wait for the `Promise` to be resolved.

