# easy-hastebin [![downloads](https://img.shields.io/npm/dt/easy-hastebin.svg?color=%234cb9fa&style=flat-square)](https://www.npmjs.com/package/easy-hastebin)
Simple NPM module for generating [hasteb.in](https://hasteb.in) links.

## Motivation
I prefer [hasteb.in](https://hasteb.in) to [hastebin.com](https://hastebin.com) and I didn't like the fact that other modules used [snekfetch](https://www.npmjs.com/package/snekfetch) (now deprecated).

## Installation
```npm i easy-hastebin```

## Usage
```js
const haste = require('easy-hastebin');

const myCrazyProgram = f=n=>n>1?f(n-1)+f(n-2):n;

// js file extension (default)
haste(myCrazyProgram).then(console.log);

// custom file extension
haste(myCrazyProgram, 'cpp').then(console.log);

// plaintext (no file extension)
haste(myCrazyProgram, null).then(console.log);
```

### License
• [MIT](https://github.com/syztum/easy-hastebin/blob/master/LICENSE.md) © 2019 [Sam Gilburg](https://github.com/syztum)