# easy-hastebin
Simple NPM module for generating hasteb.in links.

# Usage
```js
const haste = require('easy-hastebin');

const myCrazyProgram = console.log('Hello World');
haste(myCrazyProgram, 'js').then(res => console.log(res)); // => https://hasteb.in/randomURL.js
```