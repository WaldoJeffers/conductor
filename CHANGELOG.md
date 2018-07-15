# changelog

## v1.1.1

### new features
- Add a [factory](https://conductor.js.org/api-reference/factory) method

### bugfixes
- Fix [`type`](https://conductor.js.org/api-reference/type)'s results for `async` functions: it (incorrectly?) returned `asyncfunction` instead of `function`.

### internals
- Add a `.prettierignore` file

## v1.1.0

### new features

- Add a [flatten](https://conductor.js.org/api-reference/flatten) method
- Add a [join](https://conductor.js.org/api-reference/join) method

### bugfixes

- Correctly export `random`. Thanks @Haegin!
- Fix minor documentation issues
