// function add(a, b) {
//     const total = a + b;
//     return total;
//   }
  
//   console.log(add(1, 4)); // calling/invoking the function. This returns 5;
// console.log('add', add);  

// function returnOne () {
//     return 1;
// }; //function declaration 

// const returnOne = function() {
//     return 1;
// }; //function expression

// function fnReturner() {
//     return returnOne; //returns the definition of the returnOne function
// };
// console.log(fnReturner());

//Arrow function
//this is how you declare an arrow function
// start with a const keyword followed by the variable/name of the function
// use parentheses to specifiy arguments
// follow that with an equal sign and a greater than sign: =>
// and that followed by code block `{...}`

// const add = (a, b = 6) => {
//     const total = a + b;
//     return total;
// };
// console.log(add(3));

//giving a or b values in const declaration sets default falsey value,
// but adding values in console.log will override those default values.

//if the body of the expression is only a single line, 
//we can omit the curly braces and omit a return statement, and it will still work
// const add = (a, b = 6) => a + b;
// console.log(add(3));

// const bark = name => `${name} barks ... WOOF!`;
// console.log(bark('brody'));

// Rewriting functions into arrow functions

// function add(a, b) {
//     return a + b;
// };
// console.log(add(1, 5));
// can be rewritten to:
// const add = (a, b) => a + b;
// console.log(add(1, 5));


// function flip(fn) {
//     return function(a, b) {
//         return fn(b, a);
//     };
// };
// can be rewritten into:

// const flip = (fn) => {
//     return function(a, b) {
//         return fn(b, a);
//     };
// };

// const subtract = (a, b)  => a - b;
// // flip

// const flip = (fn)  => {
//   return function(a ,b) {
//     return fn(b, a);
//   }
// };

// const flippedSubtract = flip(subtract); 

// console.log('flippedSubtract');
// console.log(flippedSubtract);

// console.log(flippedSubtract(5, 10));

//XYZ FUNCTION (6 ways):
// const V = x => {
//     return function(y) {
//         return function(z) {
//             return z(x)(y);
//         }
//     }
// }

// const V2 = x => {
//     return y => {
//       return function(z) {
//         return z(x)(y);
//       }
//     }
//   }
//   const V3 = x => {
//     return y => {
//       return z => {
//         return z(x)(y);
//       }
//     }
//   };
  
//   const V4 = x => {
//     return y => {
//       return z => z(x)(y);
//     }
//   };
  
//   const V5 = x => {
//     return y => z => z(x)(y);
//   }
  
//   const V6 = x => y => z => z(x)(y);

//   HIGHER ORDER FUNCTIONS

//DEMO 'LOUD' FUNCTION

//fn is a callback function
//it will be executed in the body of the loud function
// const five = () => 5;
// const ten = () => 10;
// const loud = (fn) => {
//     console.log(`Calling ${fn.name}`);
//     const value = fn();
//     console.log(`Called ${fn.name} and it returned ${value}`);
//     return value;
// };
//TEST CONSOLE LOGS
// loud(five()); //this will not work! loud will try to call 5();
// loud(5); //similar to above, will not work.
// loud(five); //will execute the function and produce: 'Calling ten' 'Called ten and it returned 10'

//NEW H-O Function

//logfn will be a console. function of some sort
// const loudCustomLogger = (logfn, fn) => {
//     logfn(`Calling ${fn.name}`);
//     const value = fn();
//     logfn(`Called ${fn.name} and it returned: ${value}`);
//     return value;
// };
// //multiple ways to successfully call this function:
// loudCustomLogger(console.error, ten);
// loudCustomLogger(console.warn, () => 5);


//DEMO: IMPLEMENT each
//will output the index positional value of each value within an array ( 0 is 1, 1 is 2, etc).
// const each = (cb, arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         cb(arr[i], i);
//     };
// };

// each((val, index) => {
//     console.warn(`${index} is ${val}`)
// }, 
//     [1,2,3,4,5]
// );

//map FUNCTION
// const map = (fn, arr) => {
//     const newArray = [];
//     // USING FOR LOOP
//     for(let i = 0; i< arr.length; i++) {
//         newArray.push(fn(arr[i], i));
//     };
//     // USING FOR OF LOOP
// //     let i = 0;
// //   for (let element of array) {
// //     newArray.push(fn(element, i))
// //     i++;
//     return newArray;
// };
// debugger;
// const repeat = (str, index) => {
//     return str.repeat(index)
// };
// //DEBUGGER WILL ALLOW YOU TO WALK THROUGH CHROME INSPECT DEV TOOLS STEP-BY-STEP TO SEE HOW YOUR FUNCTIONS OPERATES
// debugger;
// //DEBUGGER WILL PAUSE YOUR FUNCTION WHERE YOU INSERT THE WORD 'debugger;'
// const mappedArray = map(repeat, ['a','b','c','d','e']);
// console.log(mappedArray); //will return (5) ["","b", "cc", "ddd", "eeee"]

// RECURSIVE FUNCTIONS
// function sum(arr) {
//     if(arr.length === 0) {
//         return 0;
//     } else {
//         return arr[0] + sum(arr.slice(1));
//     }
// };
// debugger;

// const sumValue = sum([1,2,3,4]);
// console.log(sumValue);

// factorial demo
// const factorialR = (n) => {
//     if (n === 1) {
//       return 1;
//     }
//     return n * factorialR(n - 1);
//   }
// //   debugger;
//   console.log(factorialR(5));

//   //iteration
//   const factorialI = (n) => {
//     let product = 1;
//     for (let i = n; i >= 1; i--) {
//       product = product * i;
//     }
//     return product;
//   }
// //   debugger;
//   console.log(factorialR(5));
//   console.log(factorialI(5));

//  String Reverse Function:
//  ITERATION FORM
const reverse = (str) => {
    let rev = [];
    for (let i = 0; i <= str.length; i++) 
    rev.push(str.charAt(str.length - i));
    return rev.join('');
  };
//   debugger;
  console.log(reverse("codecore"));

//  RECURSIVE FORM OF SAME FUNCTION:
  const recursiveReverse = (string) => {
      if (string.length === 0) {
          return '';
      }
      const firstChar = string[0];
      const restOfString = string.slice(1);
    return recursiveReverse(restOfString) + firstChar;
  }
//   debugger;

  console.log(recursiveReverse("codecore"));