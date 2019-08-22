const add = require('./add');
const primes = require('./primes');

console.log(add(5, 6));

let result = 0;

for(let num of primes) {
  result += num;
}

console.log(result);