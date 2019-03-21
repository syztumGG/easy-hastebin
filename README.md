# easy-hastebin
Simple NPM module for generating hasteb.in links.

## Installation
```npm i easy-hastebin```

## Usage
```js
const haste = require('easy-hastebin');

const myCrazyProgram = console.log('Hello World');
haste(myCrazyProgram, 'js').then(res => console.log(res));
// => https://hasteb.in/randomURL.js
```

### Links
[NPM](https://www.npmjs.com/package/easy-hastebin) // [Github](https://github.com/syztumGG/easy-hastebin)