
// defining a constant `SPACE` which is used in many places
// to keep code DRY, readable, and maintainable (if we ever need to change SPACE we can do it in one place)
const SPACE = ' ';

// the keyword `this` within the object's methods refers to the owner object
// the methods `leftPad`, `rightPad`, and `pad` are owned by the object `StringExtras`
// so calling `this` within it refers to the `StringExtras` object
const StringExtras = {
  repeat(string, number) {
    let repeatedString = '';
    for (let index = 0; index < number; index++) {
      repeatedString += string;
    }
    return repeatedString;
  },
  
  leftPad(string, stringLengthWithPadding) {
    let amountOfPadding = this.calculatePadding(string, stringLengthWithPadding);
    let leftPadString = this.repeat(SPACE, amountOfPadding);
    leftPadString += string;
    return leftPadString;
  },

  rightPad(string, stringLengthWithPadding) {
    let amountOfPadding = this.calculatePadding(string, stringLengthWithPadding);
    let rightPadString = this.repeat(SPACE, amountOfPadding);
    rightPadString = string += rightPadString;
    return rightPadString;
  },

  calculatePadding(string, number) {
    if (string.length < number) {
      return number - string.length;
    }
    return 0;
  },

  pad(string, stringLengthWithPadding) {
    let amountOfPadding = (this.calculatePadding(string, stringLengthWithPadding));
    let leftPadding, rightPadding;
    // check if the amount of padding is even
    if (amountOfPadding % 2 === 0) {
      // if it is then we can add even number of spaces to each side of the string
      const padding = amountOfPadding/2;
      leftPadding = this.repeat(SPACE, padding);
      rightPadding = this.repeat(SPACE, padding);
    } else {
      // if the number of padding needed is odd then we will add the extra space to the left side
      const padding = Math.floor(amountOfPadding/2)
      leftPadding = this.repeat(SPACE, padding + 1);
      rightPadding = this.repeat(SPACE, padding);
    }
    return leftPadding += string += rightPadding;
  },

  capitalize(string) {
    const firstLetter = string.slice(0,1).toUpperCase();
    const remainingLetters = string.slice(1, string.length);
    return `${firstLetter}${remainingLetters}`;
  }
};

let a = 'you';

console.log(StringExtras.repeat(a, 3)); // returns 'youyouyou'
console.log(StringExtras.repeat(' ', 6)); // returns '      '
console.log(StringExtras.leftPad(a, 5)); // returns '  you'
console.log(StringExtras.leftPad(a, 1)); // returns 'you'
console.log(StringExtras.leftPad(a, 3)); // returns 'you'
console.log(StringExtras.leftPad(a, 4)); // returns ' you'
console.log(StringExtras.rightPad(a, 6) + 'me'); // returns 'you   me'
console.log(StringExtras.pad(a, 5)); // returns ' you '
console.log(StringExtras.pad(a, 6)); // returns '  you '
console.log(StringExtras.pad(a, 10)); // returns '    you   '
console.log(StringExtras.capitalize(a)); // returns 'You'