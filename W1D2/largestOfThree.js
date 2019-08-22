const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);
let x = 0;

if(a > b) {
    x = a;
} else {
    x = b;
} if (c > x) {
    x = c;
} 
console.log(`The largest number is ${x}`);

