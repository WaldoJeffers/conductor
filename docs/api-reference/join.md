# join

```erlang
join :: (String separator, Collection input) => String output
```

## description

Join a collection's values into a string using the provided separator.

## examples

### array

```javascript
import { join } from 'conductor'

const array = ['Bonsoir', 'Elliot']
join(', ', array) // 'Bonsoir, Elliot'
```

### object

```javascript
import { join } from 'conductor'

const object = { word1: 'Bonsoir', word2: 'Elliot' }
join(', ', object) // 'Bonsoir, Elliot'
```

### set

```javascript
import { join } from 'conductor'

const set = new Set(['Bonsoir', 'Elliot'])
join(', ', set) // 'Bonsoir, Elliot'
```

### map

```javascript
import { join } from 'conductor'

const map = new Map([['word1', 'Bonsoir'], ['word2', 'Elliot']])
join(', ', map) // 'Bonsoir, Elliot'
```

