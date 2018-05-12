---
description: Logical NOT operator
---

# not

**`not :: Any input => Boolean negation`**

## description

Returns the logical negation of the input value. It's the functional equivalent of the JavaScript not operator `!`. It can be very useful in a function composition chain, to avoid writing code like this:

`compose(b => !b, some(...))`

As you can see from the type signature, it obviously accepts `Booleans` as input values, but also values of any types. Just beware of [how JavaScript coerces values to their Boolean equivalents](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

## examples

#### basic example

```javascript
import { not } from 'conductor'

not(true) // false
```

#### usage in a function composition

```javascript
import { compose, not } from 'conductor'

const illegal_characters = /[?:;!/-]/
const searchIllegalCharacters = str => illegal_characters.test(str)
const isValid = compose(not, searchIllegalCharacters)
```

Suppose we want have a function which checks if an input string is valid. The input is considered valid if does not contain any illegal characters. The illegal characters are listed in a regular expression. Then, we use [`RegExp.prototype.test`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) to see if any of these characters is matched in the input string. Since our input is considered valid only if it `searchIllegalCharacters` returns false, we use the logical not operator to negate its result.

