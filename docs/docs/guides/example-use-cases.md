# example-use-cases

## decoding JWTs

{% code-tabs %}
{% code-tabs-item title="decodeToken.js" %}
```javascript
const decodeToken = (req) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new OAuth2Error('Missing Authorization header', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN);
  }
  // Strip Bearer part
  const token = authorization.split(' ')[1];
  if (!token) {
    throw new OAuth2Error('Missing access token', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN);
  }
  // base64 decode
  const decoded = jwt.decode(token);
  // Check that the token contains a sub claim i.e an userId
  if (!decoded || !decoded.sub) {
    throw new OAuth2Error('Invalid access token', 401, AUTHORIZATION_INVALID_ACCESS_TOKEN);
  }
  return decoded;
};
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="getAuthorization.js" %}
```javascript
const getAuthorization = req => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new OAuth2Error('Missing Authorization header', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN);
  }
  return authorization
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="getToken.js" %}
```javascript
const getToken = authorization => {
  // Strip Bearer part
  const token = authorization.split(' ')[1];
  if (!token) {
    throw new OAuth2Error('Missing access token', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN);
  }
  return token
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="getDecodedToken.js" %}
```javascript
const getDecodedToken = token => {
  // base64 decode
  const decoded = jwt.decode(token);
  // Check that the token contains a sub claim i.e an userId
  if (!decoded || !decoded.sub) {
    throw new OAuth2Error('Invalid access token', 401, AUTHORIZATION_INVALID_ACCESS_TOKEN);
  }
  return decoded;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="decodeToken.js" %}
```javascript
const decodeToken = (req) => {
  const authorization = getAuthorization(req)
  const token = getToken(authorization)
  return decodeToken(token)
};
```
{% endcode-tabs-item %}

{% code-tabs-item title="getAuthorization.js" %}
```javascript
const getAuthorization = req => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new OAuth2Error('Missing Authorization header', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN);
  }
  return authorization
}
```
{% endcode-tabs-item %}

{% code-tabs-item title="getToken.js" %}
```javascript
const getToken = authorization => {
  // Strip Bearer part
  const token = authorization.split(' ')[1];
  if (!token) {
    throw new OAuth2Error('Missing access token', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN);
  }
  return token
}
```
{% endcode-tabs-item %}

{% code-tabs-item title="getDecodedToken.js" %}
```javascript
const decodeToken = token => {
  // base64 decode
  const decoded = jwt.decode(token);
  // Check that the token contains a sub claim i.e an userId
  if (!decoded || !decoded.sub) {
    throw new OAuth2Error('Invalid access token', 401, AUTHORIZATION_INVALID_ACCESS_TOKEN);
  }
  return decoded;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="getAuthorization.js" %}
```javascript
import { compose, get, ifElse, not } from 'conductor'

const getAuthorization = compose(
  ifElse(not, () => { throw new OAuth2Error('Missing Authorization header', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN) }),
  get('authorization'),
  get('headers'),
)
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="getToken.js" %}
```javascript
import { compose, get, ifElse, split } from 'conductor'

const getToken = compose(
  ifElse(not, () => { throw new OAuth2Error('Missing access token', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN) }),
  get(1),
  split(' '),
)
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="getDecodedToken.js" %}
```javascript
const getDecodedToken = compose(
  ifElse(or(not, compose(not, get('sub'))), () => { throw new OAuth2Error('Invalid access token', 401, AUTHORIZATION_INVALID_ACCESS_TOKEN) })
  jwt.decode,
)
```
{% endcode-tabs-item %}
{% endcode-tabs %}





{% code-tabs %}
{% code-tabs-item title="decodeToken.js" %}
```javascript
import { compose } from 'conductor'
import getAuthorization from './getAuthorization'
import getToken from './getToken'
import getDecodedToken from './getDecodedToken'

const decodeToken = compose(getDecodedToken, getToken, getAuthorization)
```
{% endcode-tabs-item %}

{% code-tabs-item title="getAuthorization.js" %}
```javascript
import { compose, get, ifElse, not } from 'conductor'

const getAuthorization = compose(
  ifElse(not, () => { throw new OAuth2Error('Missing Authorization header', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN) }),
  get('authorization'),
  get('headers'),
)
```
{% endcode-tabs-item %}

{% code-tabs-item title="getToken.js" %}
```javascript
import { compose, get, ifElse, split } from 'conductor'

const getToken = compose(
  ifElse(not, () => { throw new OAuth2Error('Missing access token', 401, AUTHORIZATION_MISSING_ACCESS_TOKEN) }),
  get(1),
  split(' '),
)
```
{% endcode-tabs-item %}

{% code-tabs-item title="getDecodeToken.js" %}
```javascript
const getDecodedToken = compose(
  ifElse(or(not, compose(not, get('sub'))), () => { throw new OAuth2Error('Invalid access token', 401, AUTHORIZATION_INVALID_ACCESS_TOKEN) })
  jwt.decode,
)
```
{% endcode-tabs-item %}
{% endcode-tabs %}

