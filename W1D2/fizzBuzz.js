const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

for (let number = 1; number <= 100; number++) {
    if (number % a === 0 && number % b === 0) {
      console.log("FizzBuzz");
    } else if (number % b === 0) {
      console.log("Buzz");
    } else if (number % a === 0) {
      console.log("Fizz");
    } else {
      console.log(number);
    }
  }