// //OPTION 1
function charCounts(string) {
    const counter = {};
    //VARIABLE OPTION 1 using global replace
    const modString = string.toLowerCase().replace(/ /g, '');
    //VARIABLE OPTION 2 using split/join
    // const modString = string.toLowerCase().split(' ').join('');

    for (let charIndex = 0; charIndex < modString.length; charIndex++) {
     let currentChar = modString[charIndex];
     //SUB-OPTION 1 using ternary operator
     counter[currentChar] ? counter[currentChar]+=1 : counter[currentChar]=1;
     //SUB-OPTION 2 using if/else statement
    //    if (counter[char]) {
    //      counter[char] += 1;
    //    } else {
    //      counter[char] = 1;
    //      }
       }
     return counter;
   }

console.log(charCounts("CodeCore in the building! 232323"));
console.log(charCounts("An archer"));


//OPTION 2

// function charCounts(string) {
//     const counter = {};
//     string = string.toLowerCase();
//     for (let character = 0; character < string.length; character++) {
//      let char = string[character];
//      if (char !== ' ') {
//        if (typeof counter[char] === "number") {
//          counter[char] += 1;
//        } else {
//          counter[char] = 1;
//          }
//        }
//      }
//      return counter;
//    }
//    console.log(charCounts('CodeCore in the building! 232323'));