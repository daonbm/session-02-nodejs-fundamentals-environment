// const log = require('./lib/logger'); // cjs module
import square, { PI } from './lib/utils.mjs'; // es module
console.log(square(5), PI.toFixed(4));

