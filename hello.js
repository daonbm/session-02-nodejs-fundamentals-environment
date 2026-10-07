console.log('Hello Node.js');

// If require fail, throw error -> sync loader
const os = require('os');
console.log('My OS: ', os.platform());

const a = 1 + 2;
console.log(a);

// cache module
console.log('Current OS: ', os.homedir());
