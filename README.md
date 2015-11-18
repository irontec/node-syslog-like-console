# syslog-like-console

node-syslog wrapper with same methods than console

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm i --save syslog-like-console
```

## Usage

```js
// Instance the logger
// params are log name and mask level
var log = require('syslog-like-console')('my-log-name', 'LOG_INFO');


log.info('tag', 'message');
log.info('message');

log.log('tag', 'message');
log.error('tag', 'message');
log.warn('tag', 'message');
log.debug('tag', 'message');
```

## Tests

```sh
npm install
npm test
```

## Dependencies

-   [node-syslog](https://github.com/schamane/node-syslog): Node module to support sending messages to syslog daemon [![Build Status](https://travis-ci.org/schamane/node-syslog.svg)](https://travis-ci.org/schamane/node-syslog) [![NPM version](https://badge.fury.io/js/node-syslog.svg)](http://badge.fury.io/js/node-syslog)

## Dev Dependencies

-   [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript. [![Build Status](https://travis-ci.org/eslint/eslint.svg?branch=master)](https://travis-ci.org/eslint/eslint) [![NPM version](https://badge.fury.io/js/eslint.svg)](http://badge.fury.io/js/eslint)

## License

ISC
