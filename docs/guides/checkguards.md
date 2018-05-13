# checkGuards

```javascript
const checkGuardsOld = (guards, transition) => async prevObj => {
  const guardValues = await Promise.all(
    guards.map(async callback => callback(prevObj, transition))
  )

  if (!guardValues.every(a => a === true)) {
    throw new Error(
      `Guard on transition from ${transition.from} to ${
        transition.to
      } returned false`
    )
  }

  return prevObj
}
```

{% code-tabs %}
{% code-tabs-item title="checkGuards.js" %}
```javascript
const checkGuards = (guards, transition) => prevObj =>
  compose(
    ifElse(
      a => a === true,
      () => {
        throw new Error(
          `Guard on transition from ${transition.from} to ${
            transition.to
          } returned false`
        )
      },
      always(prevObj)
    ),
    some(a => a === false),
    thrush(prevObj),
    apply(branch),
    map(bind(prevObj, transition))
  )(guards)

```
{% endcode-tabs-item %}
{% endcode-tabs %}

