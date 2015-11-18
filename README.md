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

[EUPL v1.1](https://raw.githubusercontent.com/irontec/node-syslog-like-console/master/LICENSE.txt)

```
Copyright 2015 Irontec SL

Licensed under the EUPL, Version 1.1 or - as soon they will be approved by the European
Commission - subsequent versions of the EUPL (the "Licence"); You may not use this work
except in compliance with the Licence.

You may obtain a copy of the Licence at:
http://ec.europa.eu/idabc/eupl.html

Unless required by applicable law or agreed to in writing, software distributed under 
the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF 
ANY KIND, either express or implied. See the Licence for the specific language 
governing permissions and limitations under the Licence.
```
