function isEven(num) {
    if (typeof num !== "number") {
        return false;
    } else if ((num & 1) == 0) {
      return true
    } else {
        return false;
    }
}
console.log(isEven(17));
console.log(isEven(24));
console.log(isEven(""));
console.log(isEven(2));
console.log(isEven(48001));
console.log(isEven(4800));
