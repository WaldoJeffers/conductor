## ![conductor](https://user-images.githubusercontent.com/7644970/39099223-3ac23bca-4677-11e8-8c65-c29991925972.png)

[![Conductor on npmjs](https://img.shields.io/npm/v/conductor.svg?style=flat-square)](https://www.npmjs.com/package/conductor)
[![Conductor download stats on npmjs](https://img.shields.io/npm/dw/conductor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=conductor)
[![Codeship Status for WaldoJeffers/conductor](https://img.shields.io/codeship/da09eb70-22e7-0136-b547-4e8bca269d75.svg?style=flat-square)](https://app.codeship.com/projects/286044)
[![codecov](https://img.shields.io/codecov/c/github/WaldoJeffers/conductor.svg?style=flat-square)](https://codecov.io/gh/WaldoJeffers/conductor)

Conductor is a modern utility library to help you control the execution flow using functional programming.

It provides a set of utility functions which can be used both with _asynchronous_ and _synchronous_ code, allowing you to control your execution flow very clearly and with a minimum of code. The library is designed in a functional programming spirit, to provide a coherent API and highly composable functions. Think of it as if [Ramda](http://ramdajs.com/) & [Async](http://caolan.github.io/async/) had a baby.

## installation

```
npm install conductor
```

## examples

Here are a few examples of what you can do with **conductor**.

### use asynchronous functions seamlessly

```js
import { map } from 'conductor'

const fetchCharacter = id => fetch(`https://swapi.co/api/people/${id}`).then(res => res.json())
const character_ids = [1, 2, 3]
await map(fetchCharacter, character_ids) // [{id: 1, name: 'Luke'}, ...]
```

You can use `map` with an asynchronous mapper and directly use the `await` keyword. No need to use `Promise.all` like you need to with `Array.prototype.map` or `lodash.map`.

### compose things

```js
import { compose, get } from 'conductor'

const character_id = 1
const fetchCharacter = id =>
  fetch(`https://swapi.co/api/people/${id}`).then(res => res.json())
const fetchPlanet = url => fetch(url).then(res => res.json())
await compose(get('name'), fetchPlanet, get('homeworld'), fetchCharacter)(character_id)
```

## documentation

* [introduction](https://waldojeffers.gitbook.io/conductor/)
* [core concepts](https://waldojeffers.gitbook.io/conductor/overview/core-concepts)
* [API reference](https://waldojeffers.gitbook.io/conductor/api-reference/always)

## influences

* [Ramda](http://ramdajs.com/)
* [Async](http://caolan.github.io/async/)
* [RxJS](http://reactivex.io/rxjs/)
