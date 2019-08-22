const fs = require("fs");

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter = 1;
let number = Math.round(Math.random() * 10);
// console.log(number)

function question() {
  interface.question(
    "I'm thinking of number between 0 and 10, what is it? ",
    answer => {
      // console.log(number)
      if (parseInt(answer) === number) {
        console.log(`Guessed ${number} correctly in ${counter} attempts!`);
        process.exit();
      } else {
        console.log("Nope. Try again");
        counter += 1;
        question();
      }
    }
  );
}

question();

// ALTERNATE VERSION
console.log("I'm thinking of a number between 1 and 10");
const readline = require('readline');
const ineterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
let times = 0;
const number = '5';
ineterface.prompt();
ineterface.on('line', (line) => {
    times++;
    switch (line.trim()) {
        case number:
            console.log(`Guessed ${number} correctly in ${times} attempts!`);
            process.exit();
            break;
        default:
            console.log("Nope. Try again.");
            break;
    }
    ineterface.prompt();
});