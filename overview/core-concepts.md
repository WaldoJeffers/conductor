# Core concepts

## Control of the execution flow

The most important concept of **conductor** is that _you_ are in control of the execution flow \(it's actually this library's very goal\), but you have to see this both as a _advantage_ and a _constraint_. Promises are frequently blamed for [never being synchronous](https://staltz.com/promises-are-not-neutral-enough.html#never-synchronous), meaning that any function in a Promise chain will run _asynchronously_, whether this function is actually asynchronous or not.

### A quick example

Let's say we have a couple of utility functions, some synchronous and other asynchronous, and a user \(Luke\) whose favorite starship we would like to know \(no spoilers please!\).

```javascript
const getStarships = user => user.starships // sync
const head = array => array[0] // sync
const fetchStarship = async starship_URL => fetch(starship_URL).then(response => response.json()) // async
const getStarshipName = starship => starship.name // sync

const Luke = {
    name: 'Luke Skywalker', 
    starships: [
        'https://swapi.co/api/starships/12/', 
        'https://swapi.co/api/starships/22/'
    ]
}
```

Now, we would like to use the previous utility functions together in a `getFavoriteStarshipName` function, to retrieve the name of Luke's favorite starship. A naive \(but correct!\) implementation could look like this:

```javascript
const getFavoriteStarshipName = async user () => {
    const starships = getStarships(user)
    const starship_URL = head(starships)
    const starship = fetchStarship(starship_URL)
    const starship_name = getStarshipName(starship)
    return starship_name
}

getFavoriteStarshipName(Luke) // 'X-Wing'
```

That works! But this seems really bloated, and we should be able to write simpler code since we took the time to write these neat & concise modular functions. Could we rewrite `getFavoriteStarshipName` in a way that takes advantage that all these functions can be chained, or rather _composed_ since we would like to write our code in a more minimalistic, or _point-free_, way ?

Let's try using `compose` from Ramda or Lodash:

```javascript
import {compose} from 'ramda' // or 'lodash.compose'

const getFavoriteStarshipName = async compose(getStarshipName, fetchStarship, head, getStarships) // remember compose works right to left
getFavoriteStarshipName(Luke) // Error
```

This throws an error, because `fetchStarship` returns a `Promise` which is not yet resolved when `getStarshipName` tries to retrieve the `name` property on its passed parameter. Too bad!

Oh! We suddenly remember that `Promises` have a [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method, which allows chaining. Let's use that.

```javascript
const getFavoriteStarshipName = user => getStarships(user).then(head).then(fetchStarship).then(getStarshipName)
getFavoriteStarshipName(Luke) // Error
```

😞So close. Our code is much cleaner, and takes advantage of chainability, in an almost _point-free_ style... but it does not work, because `getStarships` does not return a `Promise`, meaning we can not use `then` on its result.

Let's make `getStarships` return a `Promise` to fix this:

```javascript
const getStarships = async user => user.starships // equivalent to user => Promise.resolve(user.starships)
...
const getFavoriteStarshipName = user => getStarships(user).then(head).then(fetchStarship).then(getStarshipName)
getFavoriteStarshipName(Luke) // 'X-Wing'
```

🎉Hooray! Now we are able to take full advantage of our neat modular functions by chaining them. But our little fix means that every time we will need to use `getStarships` to retrieve a user's starships, we will need to use it in a _asynchronous_ context, either using `Promise.prototype.then` or the `await` keyword \(which means that the surrounding function will need to use the `async` keyword, and its surrounding function will itself have to use `await` and so on\). This does not make sense since `getStarships` is just a simple \(admittedly, quite _dumb_\) **synchronous** operation.

Let's say `getStarships` was also used in a simple `printStarships`:

```javascript
const printStarships = user => `${user.name} flies on ${getStarships(user).join()}.`
printStarships(Luke)// 'Luke flies on X-Wing, Millenium Falcon'
```

This function is now broken because `getStarships` returns a `Promise`.

[Promises are _contagious_](https://books.google.com/books?id=G7rBCQAAQBAJ&pg=PA25&lpg=PA25&dq=javascript+promises+are+contagious&source=bl&ots=NjXvlDkgSS&sig=4otCu3qz4HlEHRZwuBnpBJt5cHY&hl=fr&sa=X&redir_esc=y#v=onepage&q=javascript%20promises%20are%20contagious&f=false=), in the sense that their asynchronous nature spreads to their surroundings whether you like it or not.

### Back to you, Larry

With **conductor**, you won't have to make all your utility functions _asynchronous_ to compose them, since all the library's functions will work with both synchronous and asynchronous functions, allowing you to mix them with no hassle. Let's pull back our attempt at using `compose` from the previous example, but this time using **conductor**'s `compose` function.

```javascript
import { compose } from 'conductor'

const getFavoriteStarshipName = await compose(getStarshipName, fetchStarship, head, getStarships)
getFavoriteStarshipName(Luke) // 'X-Wing'
```

Now this works, and we can achieve a proper _point-free_ style, without breaking ~~a sweat~~ `getStarships`'s synchronous nature 😎. It works because **conductor** knows how to handle both synchronous and asynchronous functions, but the previous code would also run \(meaning _not throw an error_\) if we didn't use the `await` keyword. It would simply return a `Promise` instead of a `String`. So you are in _full control_ of the execution flow: you can mix synchronous and asynchronous functions in `compose`, decide exactly when you want to `await`, but don't forget that you will need to do it at some point if you want to use the returned value outside of `compose`'s limits \(and don't forget to [catch your errors!](https://github.com/tc39/ecmascript-asyncawait/issues/72)\).

## Functional programming style

