//Function that takes in an Array and converts it to an  object of key: value pairs

function toArray(obj) {
    const arr = [];
    for (let key in obj) {
        //loop through each key of object.
        arr.push([key, obj[key]]);
        //push an array with the key and the value of the key to our "arr" variable.
    }
    return arr;
    // when were done looping through each of the keys, return the array.
}
const myObj = {a: 1, b: 2, c: [3,4], d: 4};
console.log(toArray(myObj));