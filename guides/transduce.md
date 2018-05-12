---
description: Reduces a collection using a transformer and a reducer
---

# transduce

**`transduce :: (Function transformer, Function reducer, Any seed, Collection collection) => Any output`**

## description

Returns an `output` value after reducing an input `collection` using the provided `transformer` and `reducer`. 

The reducer function should have the following type signature:  
 `(Any accumulator, Any value, Any key, Collection collection) => Any output`, where:

* **`accumulator`** is the result of the previous `reduce` iterations
* **`value`** is the value of the current item in the iteration
* **`key`** is the key of the current item in the iteration
* **`collection`** is the input collection being iterated on

The transformer function should accept a reducer and return another reducer function, and thus have the following type signature  
`(Any accumulator, Any value, Any key, Collection collection) =>  
  (Any accumulator, Any value, Any key, Collection collection) => Any output`

Calling `transduce(transformer, reducer, seed, collection)` is equivalent to calling `reduce(transformer(reducer), seed, collection)`.

{% hint style="info" %}
`transduce` is basically equivalent to `reduce` with a separation of concerns between the transforming operation and the reducing one \(hence the name _trans-duce_\), favoring clarity and code reuse. Although it is very similar to reduce, it can be hard to grasp how it works and its usefulness. If you're not familiar with this concept, I highly suggest you read the excellent article [What's a Transducer?](http://raganwald.com/2017/04/30/transducers.html) by Reginald _Raganwald_ Braithwaite.
{% endhint %}

##  example

#### basic example

```javascript
const characters = [
  { name: 'Luke', side: 'light' },
  { name: 'Han', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
]
const concatNames = (acc, name) => {
  acc.push(name)
  return acc
}
const retrieveGoodGuysName = reducer => (acc, character) =>
  character.side === 'light' ? reducer(acc, character.name) : acc
const seed = []
transduce(retrieveGoodGuysName, concatNames, seed, characters) // ['Luke', 'Han']
```

Suppose we have an array of `characters`, each having a `name` and a `side` property. We want to **get a new array** containing only the **names** of the **good** guys. If we look closely at what we want to achieve, we can decompose it into 2 parts:

1. Transforming each item \(filtering it and accessing a property\)
2. Combining these items in a new array

Of course, we could also use `map` and `filter` to perform this operation, like so:

```javascript
compose(map(get('name')), filter(compose(equals('light'), get('side'))))(characters)
```

But that would also mean the `characters` array would be iterated over _twice_, which seems a pity.

Using `transduce` ensures the iteration is only done once, no matter how many transformations are done on each item.

* **`concatNames`** is our reducer, simply adding a name to our array accumulator and returning it.
* **`retrieveGoodGuysName`** is our transformer: it accepts a reducer and returns another one, but decorated with the actual transformation we want to perform
* **`seed`** is simply an empty array

During the transduce operation, `concatNames`** **is decorated by `retrieveGoodGuysName` and then our characters array is iterated on, and each item goes through the transforming operation before the reducer gets called. In the end, we get `['Luke', 'Han']`. Hooray!

#### optimizing the previous example with utility transformers

Let's get back to our previous example, and especially this part where I said

> Suppose we have an array of `characters`, each having a `name` and a `side` property. We want to **get a new array** containing only the **names** of the **good** guys. If we look closely at what we want to achieve, we can decompose it into 2 parts:
>
> 1. Transforming each item \(filtering it and accessing a property\)
> 2. Combining these items in a new array

Well, if you look at it even more closely, we can decompose \(again!\) the transforming part into **2 subparts**:

* Filtering \(removing bad guys in our case\)
* Mapping \(mapping an input value to an output\)

Any transformation on a collection is actually a more specific version of reduce, and if you think of it, any transformation can be expressed as a combination of one or several mapping/transforming operations.

So conductor also features two utility transformer functions, which can be very useful in the context of transducers:

* `transformers/filter`
* `transformers/map`

**You can write **_**any**_** data transformation as a combination of those two functions. **Let's get back at our example.

Let's re-define our `retrieveGoodGuysName` as a combination of `filter` and `map`: 

```javascript
import { compose, equals, get } from 'conductor'
import { filter, map } from 'conductor/transformers'

const getName = get('name')
const isGood = compose(equals('light'), get('side'))
const retrieveGoodGuysName = compose(filter(isGood), map(getName))
```

The filtering operation, isGood, will be done using `transformers/filter` to check is f the 

