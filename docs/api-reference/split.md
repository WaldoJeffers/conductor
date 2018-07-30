# split

```erlang
split :: (String | RegExp pattern, String input) -> Array
```

### description

Splits a string using a string or regular expression pattern into an array of items.

### examples

#### using a string pattern

```javascript
import { split } from 'conductor'

split(', ', 'Bonsoir, Elliot') // ['Bonsoir', 'Elliot']
```

#### using a regular expression pattern

```javascript
import { split } from 'conductor'

split(/,\s/, 'Bonsoir, Elliot') // ['Bonsoir', 'Elliot']
```

