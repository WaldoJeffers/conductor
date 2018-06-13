# Introduction

## ![conductor](https://user-images.githubusercontent.com/7644970/40887398-99dfcdc4-6748-11e8-8d86-bbd343741b81.png)

[![Conductor on npmjs](https://img.shields.io/npm/v/conductor.svg?style=flat-square)](https://www.npmjs.com/package/conductor) [![Conductor download stats on npmjs](https://img.shields.io/npm/dw/conductor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=conductor) [![Codeship Status for WaldoJeffers/conductor](https://img.shields.io/codeship/da09eb70-22e7-0136-b547-4e8bca269d75.svg?style=flat-square)](https://app.codeship.com/projects/286044) [![codecov](https://img.shields.io/codecov/c/github/WaldoJeffers/conductor.svg?style=flat-square)](https://codecov.io/gh/WaldoJeffers/conductor)

**conductor** is a modern utility library to help you control the execution flow using functional programming.

## 🤵 description

It provides a set of utility functions which can be used both with _asynchronous_ and _synchronous_ code, allowing you to control your execution flow very clearly and with a minimum of code. The library is designed in a functional programming spirit, to provide a coherent API and highly composable functions. Think of it as if [Ramda](http://ramdajs.com/) & [Async](http://caolan.github.io/async/) had a baby.

Read more on [Why I'm building conductor](https://medium.com/@achille.urbain/why-im-building-conductor-fa780da821cd).

## 🔧 installation

```text
npm install conductor
```

## ✨ examples

Here are a few examples of what you can do with **conductor**.

### use asynchronous functions seamlessly

```javascript
import { map } from 'conductor'

const fetchCharacter = id => fetch(`https://swapi.co/api/people/${id}`).then(res => res.json())
const character_ids = [1, 2, 3]
await map(fetchCharacter, character_ids) // [{id: 1, name: 'Luke'}, ...]
```

You can use `map` with an asynchronous mapper and directly use the `await` keyword. No need to use `Promise.all` like you need to with `Array.prototype.map` or `lodash.map`.

### compose things

```javascript
import { compose, get } from 'conductor'

const character_id = 1
const fetchCharacter = id => fetch(`https://swapi.co/api/people/${id}`).then(res => res.json())
const fetchPlanet = url => fetch(url).then(res => res.json())
const getHomeworldName = compose(get('name'), fetchPlanet, get('homeworld'), fetchCharacter)

await getHomeworldName(character_id) // Tatooine
```

You can **compose** functions seamlessly, without ever wondering if you need to use `Promise.prototype.then` because one function returns a `Promise`. Simply add `await` before compose if one your functions is asynchronous.

### functional by design

```javascript
import { compose, equals, get, join, map, filter } from 'conductor'

const jedis = [
  { name: 'Luke', side: 'light' },
  { name: 'Yoda', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
]
const isGood = filter(compose(equals('light'), get('side')))
const getName = map(get('name'))
const concat = join(', ')

compose(concat, getName, isGood)(jedis) // 'Luke, Yoda'
```

All functions in **conductor** are **curried** by default, which means they can be used in a partially applied form to define very modular and composable blocks in your code. In the example above, we have an array of `jedis`, and we want to retrieve a concatenated string of all the good guys' name. We first define an `isGood` function, which will filter out the bad guys. Then, we create a mapping function`getName`which will retrieve each jedi's name. Finally, we create a concatenating function called `concat`. We can now easily compose them and pass the`jedis` array to the resulting function. Notice how we created small & modular **point-free** functions, and only passed the input data when we actually needed to.

## 📖 documentation

* [why i'm building conductor](https://medium.com/@achille.urbain/why-im-building-conductor-fa780da821cd)
* [introduction](https://conductor.js.org/overview/introduction)
* [core concepts](https://conductor.js.org/overview/core-concepts)
* [API reference](https://conductor.js.org/api-reference/always)

## 🗿 influences

* [Ramda](http://ramdajs.com/)
* [Async](http://caolan.github.io/async/)
* [RxJS](http://reactivex.io/rxjs/)

