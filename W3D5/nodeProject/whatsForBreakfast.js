const readline = require('readline');

// this interface will take input from `stdin` which is what the user types in
// the terminal, and it will display output to `stdout` which will display the 
// output to terminal.
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("What do you want to have for breakfast?", (answer) => {
  console.log(`Ewww!!! I hate ${answer}`);
  process.exit();
});