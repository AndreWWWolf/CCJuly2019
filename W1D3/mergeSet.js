function mergeSet(array) {
    var a = array.concat();
    for(var i = 0; i < a.length; ++i) {
        for(var j= i+1; j < a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = mergeSet(array1.concat(array2));

console.log(array1 + "\n" + array2 + "\n" + array3);