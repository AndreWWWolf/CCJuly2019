let arr = [['a',1],['b',2],['c',3]];

function take(arr, index) {
    return arr[index];
  }
  const arrayExtras = {
    // last method
    // returns the last element in an array
    last(arr) {
      return arr[arr.length -1];
    },
    // first method
    // returns the first element in array
    first: function(arr) {
      return arr[0];
    },
    // take method
    // will return the element based off a argument
    take: take,
    
    toObject(arr) {
        const obj = {};
        for (let i = 0; i < arr.length; i++) {
            const key = arr[i][0];
            const val = arr[i][1];
            obj[key] = val;
        }
        return obj;
    }

  };


console.log(arrayExtras.first(arr)); //['a',1]
console.log(arrayExtras.last(arr));
console.log(arrayExtras.take(arr,1)); //['b',2]
console.log(arrayExtras.toObject(arr)); //{a:1, b:2, c:3}
