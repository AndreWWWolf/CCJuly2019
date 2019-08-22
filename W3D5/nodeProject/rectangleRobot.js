let width, height, fileName;
const readline = require('readline');
const fs = require('fs');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('What is the width? ', (answer) => {
  width = answer;
  interface.question('What is the height? ', (answer) => {
    height = answer;
    interface.question('What is the filename ', (answer) => {
      fileName = answer;
      let matrix = '';
      for(let i = 0; i < height; i++) {
        matrix += '*'.repeat(width) + '\n';
      }
      fs.writeFile(fileName, matrix, (err) => {
        if(err) {
          console.log('Error writing file');
        } else {
          console.log(`File name ${fileName} created`);
        }
        process.exit();
      });
    });
  });
});