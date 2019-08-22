
function fib(length) {
    var fibArr = [],
      i = 0,
      j = 1;
    fibArr.push(i);
    fibArr.push(j);
    while (fibArr.length < length) {
      fibArr.push(fibArr[j] + fibArr[i]);
      j++;
      i++;
    }
    return fibArr;
  };
  console.log(fib(process.argv[2]));