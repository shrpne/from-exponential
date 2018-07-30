# from-exponential

[![NPM Package](https://img.shields.io/npm/v/from-exponential.svg?style=flat-square)](https://www.npmjs.org/package/from-exponential)
[![Minified Size](https://img.shields.io/bundlephobia/min/from-exponential.svg?style=flat-square)](https://bundlephobia.com/result?p=from-exponential)
[![Build Status](https://img.shields.io/travis/com/shrpne/from-exponential/master.svg?style=flat-square)](https://travis-ci.com/shrpne/from-exponential)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/shrpne/from-exponential/blob/master/LICENSE)

Lightweight module to convert number from exponential notation to a human readable string.

Works opposite to [Number.prototype.toExponential()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)


## Install

```
npm install from-exponential
```


## Usage

```js
import fromExponential from 'from-exponential';

fromExponential(1.123e-10); // => '0.0000000001123'
fromExponential('-12.123e-1'); // => '-1.2123'
fromExponential(Number.MAX_VALUE); // => '179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
```


## Related

It is complemented by the following packages:
- [pretty-num](https://github.com/shrpne/pretty-num) all-in-one solution for pretty numbers: format exponential, add thousands separator, reduce decimal precision
- [thousands](https://github.com/shrpne/thousands) add thousands separator


## License

MIT License



