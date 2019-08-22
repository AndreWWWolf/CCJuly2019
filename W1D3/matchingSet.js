
function matchingSet(arr, arr2) {
    let match = [];
    arr.sort();
    arr2.sort();
    for(let i = 0; i < arr.length; i++) {
        if(arr2.indexOf(arr[i]) > -1){
            match.push(arr[i]);
        }
    }
    return match;
};

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])); // [3, 4]
console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])); // ['j', 'n']