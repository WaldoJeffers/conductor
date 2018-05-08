---
description: Transform a collection into another
---

# into

**`into :: (Collection seed, Transformer transformer, Collection input) => Collection output`**

## description

Create a new collection from an input collection, using the provided transformer. This allows you to easily apply a transformation on a collection. `into` is a simplified version of `reduce`, as it will automatically use the correct reducer \(`Map.prototype.set`   , `Set.prototype.set`, `Array.prototype.push`,  `Object.defineProperty`\).

To allow greater control on the transformation, your transformer function needs to implement the `Transformer` specification. If your transformation is only a mapping between an input & an output value, you can simply use `map`.

