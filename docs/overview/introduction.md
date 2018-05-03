# Introduction

Easily mix _asynchronous_ and _synchronous_ code using functional programming.

## purpose

Nearly all of our today JavaScript code uses _asynchronous_ operations, whether through Promises, node.js callbacks, or async generators if you are one the _the cool kids ™_. But that was not always the case! Before the rise of AJAX and node.js, there was almost no asynchronous code in our JavaScript. Thus, nearly all utility functions such as `map`, `filter`, or `reduce` were not designed to handle asynchronous code, and neither were great libraries such as [Lodash](https://lodash.com/), [Ramda](https://github.com/WaldoJeffers/conductor-book/tree/fac7056dd96e5ba2952b3e9f3e01db591e39cd87/ramdajs.com) or [Underscore](http://underscorejs.org/). **conductor** intends to reconcile all these utility functions with asynchronous code, and let you regain control of the execution flow.

### example

Let's say we want to know who's really from Tatooine, using the awesome [Star Wars API](https://swapi.co/):

```javascript
const characters = [
    { id: 1, name: 'Luke Skywalker', planet_id: 1 },
    { id: 2, name: 'C-3P0', planet_id: 1 },
    { id: 3, name: 'R2-D2', planet_id: 8 },
    { id: 4, name: 'Darth Vader', planet_id: 1 },
    { id: 5, name: 'Leia Organa', planet_id: 2 }
]
const isFromTatooine = character => fetch(`https://swapi.co/planets/${character.planet_id}`)
    .then(response => response.json())
    .then(planet => planet.name === 'Tatooine')
```

#### without conductor

```javascript
const tatooine_residents = await characters.filter(isFromTatooine) // [Luke, C-3PO, R2-D2, Darth Vader, Leia]... wait what???
```

#### with conductor

```javascript
const tatooine_residents = await filter(isFromTatooine, characters) // [Luke, C-3PO, Darth Vader]
```

The sharp-eyed reader which you are has already noticed that something seems to have gone wrong in our first filtering attempt: the result is a valid array, but last time you checked, R2 and Leia were definitely not from Tatooine! What happens is that `Array.prototype.filter` has no idea your predicate is asynchronous and does not how to wait for it. But since this predicate still returns a `Promise` which evaluates to a [truthy value](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), it considers that the values match the predicate and keeps them. Since `Array.prototype.filter` is itself synchronous, the `await` keyword is not helping here and only converts the result to a _resolved_ \`Promise.

In our second attempt, the `filter` method from **conductor** _automatically_ detects that your predicate is _asynchronous_ and returns a `Promise` which will only be resolved when all items are properly filtered. Just add the magical `await` keyword to wait until the `Promise` is resolved, and _voilà_!

