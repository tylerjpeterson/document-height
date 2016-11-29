![100% test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

# document-height
> Utility to return the height of the current document


## Installation
Install via npm.

```sh
$ npm i document-height -save
```

## Usage
Require and call as needed. 
Document height is cached, so there's likely no reason to hang on to the returned value within your implementation (except to save a function call).
To clear the cache, you must pass a `true` parameter.

```js
var docHeight = require('document-height');

// Assuming a 1000px tall document...
console.log(docHeight()); // logs 1000

// At some point the height of the document
// changes to 1500px - the module will still
// return its cached value of 1000
console.log(docHeight()); // logs 1000

// to re-measure, pass a truthy value
console.log(docHeight(true)); // logs 1500
```

## Tests
Tests are mocha browser-based, and can be run via:

```sh
npm i && npm run build && npm test
```

A test coverage report can be generated via:

```sh
npm run coverage && open coverage/lcov-report/index.html
```

