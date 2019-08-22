// OPTION 1

function isHomogenous(array) {
    let type = typeof array[0];
    let isArray = Array.isArray(array[0]);
    for (let element of array) {
      if (typeof element !== type) {
        return false;
      } else if (type === 'object') {
        if (isArray && !(Array.isArray(element))) {
          return false;
        }
      }
    }
    return true;
   }

console.log(isHomogenous([null, null, null])); //true
console.log(isHomogenous([1, [2], {color: 'blue',}, null])); //false

console.log(isHomogenous([1, 2, 3])) // true
console.log(isHomogenous(['a', 'b', 'c'])) // true
console.log(isHomogenous([[2], 'Xavier'])) // false
console.log(isHomogenous([[2], {colour: 'blue'}])) // false
console.log(isHomogenous([1, '2', 3])) // false


// OPTION 2

function isHomogenous(array) {
    const typeOfFirstElementIsArray = Array.isArray(array[0]);
    const typeOfFirstElement = typeof array[0];
  
    if (typeOfFirstElementIsArray) {
      for (const element of array) {
        if (!Array.isArray(element)) {
          return false;
        }
      }
    } else {
      for (const element of array) {
        if (typeof element !== typeOfFirstElement) {
          return false;
        }
      }
    }
    return true;
  }
  
console.log(isHomogenous([null, null, null])); //true
console.log(isHomogenous([1, [2], {color: 'blue',}, null])); //false

console.log(isHomogenous([1, 2, 3])) // true
console.log(isHomogenous(['a', 'b', 'c'])) // true
console.log(isHomogenous([[2], 'Xavier'])) // false
console.log(isHomogenous([[2], {colour: 'blue'}])) // false
console.log(isHomogenous([1, '2', 3])) // false