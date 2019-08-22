const arrayUtils = {
    last(arr) {
        return arr[arr.length - 1];
    },
    first(arr) {
        return arr[0];
    },
    take(arr, n) {
        return arr.slice(0, n);
    },
    toObject(arr) {
        const result = {};
        for(let item of arr) {
            result[item[0]] = item[1];
        }
        return result;
    }
    //OPTION 2
    // first: function(arr) {
    //     return arr[0];
    // },
    // last: function(arr) {
    //     return arr[arr.length - 1];
    // },
    // take: function(arr, n) {
    //     return arr.slice(0, n);
    // },
    // toObject: function(arr) {
    //  const obj = {};
    //      for (const pair of arr) {
    //          obj[pair[0]] = pair[1];
    //      }
    //      return obj;
    // }
};

const testArray = [1,2,3,4];
const twoDArray = [['a', 1], ['b', 2], ['c', 3]];

console.log(arrayUtils.last(testArray)); // returns 4
console.log(arrayUtils.first(testArray)); // returns 1
console.log(arrayUtils.take(testArray, 3)); //returns [ 1, 2, 3]
console.log(arrayUtils.toObject(twoDArray)); // returns { a: 1, b: 2, c: 3 }
