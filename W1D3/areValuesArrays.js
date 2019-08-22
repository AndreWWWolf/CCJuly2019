// Option 1

function areValuesArrays(object) {
    let isTrue = true;
    for (let value of object) {
        if (Array.isArray(value)=== false) {
            isTrue = false;
            break;  
        } 
    }
    return isTrue;
}

console.log(areValuesArrays([[1], [2], [4, 5]])) // returns true
console.log(areValuesArrays([1, [2], [6, 7, 8]])) // returns false
console.log(areValuesArrays([[1], 2, [6, 7, 8]])) // returns false
console.log(areValuesArrays(['true', 'false'])) // returns false