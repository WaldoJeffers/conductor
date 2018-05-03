---
description: Find the index of an item using a predicate
---

# findIndex

**`findIndex :: (Function predicate, Collection collection) -> Any index`**

## description

Finds an item's index in a `Collection` using a predicate function. The predicate function has the following signature: `predicate :: (Any value, Any index, Collection collection) -> Boolean`. It should return a `Boolean` is called with the following arguments:

* **value**: the item's value
* **index**: the item's index or key. For arrays, the index will be a `Number`, for objects and maps it will be a `String`, and for sets, it will be equal to the item's value
* **collection**: the collection being iterated on.

If no item matching the predicate is found in the collection, `findIndex` will return `null`.

{% hint style="warning" %}
The predicate function can be _asynchronous_, which will turn the result into a `Promise`, requiring you to use `await` \(or `Promise.prototype.then`\).
{% endhint %}

## examples

#### basic example

```javascript
import { findIndex } from 'conductor'

const words = ['hello', 'world']
const predicate = word => word === 'world'
findIndex(predicate, words) // 1
```

#### searching in other data structures

```javascript
import { findIndex } from 'conductor'

const words = new Set(['hello', 'world'])
const translator = {hola: 'hello', mundo: 'world'}
const otherTranslator = new Map([['bonjour', 'hello'], ['monde'], ['world']])
const predicate = word => word === 'world'

findIndex(predicate, words) // 'world'
findIndex(predicate, translator) // 'mundo'
findIndex(predicate, otherTranslator) // 'monde'
```

We're using `findIndex` on data structures which are not arrays, and we are still looking for the index of the word `'world'`. Here, `words` is a `Set`, so the associated index is equal to the value, which is `world`.   `translator` is an `Object`, and the key associated to the `'world'` is the string `'mundo'`. `otherTranslator` is a `Set`, translating French to English, and the key associated to `'world'` is `'monde'`.

#### using an asynchronous predicate

```javascript
import { findIndex } from 'conductor'

const character_ids = [1, 3]
const getCharacter = id => fetch(`https://swapi.co/api/people/${id}`).then(res => res.json())
const predicate = id => getCharacter(id).then(character => character.name === 'R2-D2')
await findIndex(predicate, character_ids) // 1
```

Here, we have an asynchronous predicate which takes a character\_id and checks if the character is R2-D2,  using the [Star Wars API](https://swapi.co/). Since the predicate is asynchronous, we need to use `await` because the result is a `Promise`. Luckily, we found the droid we were looking for 😎.

