function flatten(array) {
    const flattend = [];
    !(function flat(array) {
      array.forEach(function(i) {
        if (Array.isArray(i)) flat(i);
        else flattend.push(i);
      });
    })
    (array);
    return flattend;
  }
// ALTERNATIVE METHOD TO SOLVE USING REDUCE && CONCAT 
  function flat2(arr) {
    return arr.reduce(
        function (flat, toFlatten) {
      return flat.concat(
          Array.isArray(toFlatten) ? flat2(toFlatten) : toFlatten);
    }, []);
  }

  function flat3(arra) {
    return arra.flat(Infinity);
  }


console.log(flatten([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
console.log(flat2([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flat2([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
console.log(flat2([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
console.log(flat3([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flat3([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
console.log(flat3([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]


console.time('method1v1')
    flatten([ 1, 2, [3, [4, 5] ] ]); // returns [ 1, 2, 3, 4, 5 ]
console.timeEnd('method1v1')
console.time('method1v2')
    flatten([ 'a', [ 'b', ['c'] ] ]); // returns [ 'a', 'b', 'c' ]
console.timeEnd('method1v2')
console.time('method1v3')
    flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
console.timeEnd('method1v3')
console.time('method2v1')
    flat2([ 1, 2, [3, [4, 5] ] ]); // returns [ 1, 2, 3, 4, 5 ]
console.timeEnd('method2v1')
console.time('method2v2')
    flat2([ 'a', [ 'b', ['c'] ] ]); // returns [ 'a', 'b', 'c' ]
console.timeEnd('method2v2')
console.time('method2v3')
    flat2([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
console.timeEnd('method2v3')
console.time('method3v1')
    flat3([ 1, 2, [3, [4, 5] ] ]); // returns [ 1, 2, 3, 4, 5 ]
console.timeEnd('method3v1')
console.time('method3v2')
    flat3([ 'a', [ 'b', ['c'] ] ]); // returns [ 'a', 'b', 'c' ]
console.timeEnd('method3v2')
console.time('method3v3')
    flat3([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
console.timeEnd('method3v3')
