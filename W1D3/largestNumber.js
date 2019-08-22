function largestNumber(arr) {
    let highestInt = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > highestInt) {
        highestInt = arr[i];
      } 
    }
    return highestInt;
  };
  
  console.log(largestNumber([40, 2, 13, 34, 42]))// returns 42
  console.log(largestNumber([1, 2, 3, 4, 5, 6])) // returns 6
  console.log(largestNumber([99, 77, 55, 33, 22, 11])) // returns 99