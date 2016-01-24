# iso-8859-10 [![Build status](https://travis-ci.org/mathiasbynens/iso-8859-10.svg?branch=master)](https://travis-ci.org/mathiasbynens/iso-8859-10) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/iso-8859-10/badge.svg)](https://coveralls.io/r/mathiasbynens/iso-8859-10) [![Dependency status](https://gemnasium.com/mathiasbynens/iso-8859-10.svg)](https://gemnasium.com/mathiasbynens/iso-8859-10)

_iso-8859-10_ is a robust JavaScript implementation of [the iso-8859-10 character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#iso-8859-10).

This encoding is known under the following names: csisolatin6, iso-8859-10, iso-ir-157, iso8859-10, iso885910, l6, and latin6.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install iso-8859-10
```

Via [Bower](http://bower.io/):

```bash
bower install iso-8859-10
```

Via [Component](https://github.com/component/component):

```bash
component install mathiasbynens/iso-8859-10
```

In a browser:

```html
<script src="iso-8859-10.js"></script>
```

In [Node.js](https://nodejs.org/), [io.js](https://iojs.org/), [Narwhal](http://narwhaljs.org/), and [RingoJS](http://ringojs.org/):

```js
var iso885910 = require('iso-8859-10');
```

In [Rhino](https://www.mozilla.org/rhino/):

```js
load('iso885910.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'iso-8859-10': 'path/to/iso-8859-10'
    }
  },
  ['iso-8859-10'],
  function(iso885910) {
    console.log(iso885910);
  }
);
```

## API

### `iso885910.version`

A string representing the semantic version number.

### `iso885910.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `iso885910.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to iso-8859-10. The return value is a ‘byte string’, i.e. a string of which each item represents an octet as per iso-8859-10.

```js
var encodedData = iso885910.encode(text);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
var encodedData = iso885910.encode(text, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in iso-8859-10,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `iso885910.decode(input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to iso-8859-10.

```js
var text = iso885910.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
var text = iso885910.decode(encodedData, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the iso-8859-10 encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

## Support

_iso-8859-10_ is designed to work in at least Node.js v0.10.0, io.js v1.0.0, Narwhal 0.3.2, RingoJS 0.8-0.11, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, Edge, and Internet Explorer.

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_iso-8859-10_ is available under the [MIT](https://mths.be/mit) license.
