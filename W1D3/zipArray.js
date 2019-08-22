function zip(array1, array2) {
    let mergedArray = [];
    for (let i = 0, len = Math.max(array1.length, array2.length); i < len; i++) {
        if (i < array1.length) {
            mergedArray.push(array1[i]);
        }
        if (i < array2.length) {
            mergedArray.push(array2[i]);
        }
    }
    return mergedArray;
}



console.log(zip([1, 2, 3], [4, 5, 6])); // [[1, 4], [2, 5], [3, 6]]
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow'])); // [['firstName', 'Jon'], ['lastName', 'Snow']]
console.log(zip([0, 0, 0], [])); // undefined
console.log(zip(['x', 'y', 'z'], [5, 6, 10])); // [['x', 5], ['y', 6], ['z', 10]]