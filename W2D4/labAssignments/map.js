function map (arr, cb) {
    const newArray = [];
    // USING FOR LOOP
    for(let i = 0; i< arr.length; i++) {
        newArray.push(cb(arr[i], i));
        return newArray;
        }       
    };
//     // USING FOR OF LOOP
//     let i = 0;
//   for (let element of arr) {
//     newArray.push(fn(element, i))
//     i++;
//     return newArray;
//   }
// };

let even = n => n % 2 === 0;
let pow2 = n => n ** 2;

const numbers = [1, 2, 3, 4, 5, 6];

console.log(map(numbers, even)); // [false, true, false, true, false, true]
console.log(map(numbers, n => n.toString().repeat(n))); // ['1', '22', '333', '4444', '55555', '666666']
console.log(map(numbers, pow2)); // [1, 4, 9, 16, 25, 36]

const names = ["Cersei", "Jon", "Arya"];

console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']