const reduce = (arr,callback,val) => {
    let output = val;
    for (i = 0; i < arr.length; i++) {
        output = callback(output,arr[i]);
    }
    return output;
}

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

console.log(reduce(numbers, plus, 0)); // 15
console.log(reduce(numbers, (a, b) => a * b, 1)); // 120