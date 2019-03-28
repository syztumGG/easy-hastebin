# easy-hastebin [![downloads](https://img.shields.io/npm/dt/easy-hastebin.svg?color=%234cb9fa&style=flat-square)](https://www.npmjs.com/package/easy-hastebin)
Simple NPM module for generating [hasteb.in](https://hasteb.in) links.

## Motivation
I prefer [hasteb.in](https://hasteb.in) to [hastebin.com](https://hastebin.com) and I don't like the fact that other modules used [snekfetch](https://www.npmjs.com/package/snekfetch) (now deprecated).

## Installation
```npm i easy-hastebin```

## Usage
```js
const haste = require('easy-hastebin');

const myCrazyProgram = console.log('Hello World');

// js file extension (default)
haste(myCrazyProgram).then(res => console.log(res)); // => https://hasteb.in/randomURL.js

// custom file extension
haste(myCrazyProgram, 'cpp').then(res => console.log(res)); // => https://hasteb.in/randomURL.cpp

// plaintext
haste(myCrazyProgram, null).then(res => console.log(res)); // => https://hasteb.in/randomURL
```

### License
• [MIT](https://github.com/syztumGG/easy-hastebin/blob/master/LICENSE.md) © 2019 [Sam Gilburg](https://github.com/syztumGG)