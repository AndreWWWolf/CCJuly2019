const fs = require('fs');

const myText = 'Hello World!asdf';

fs.writeFile('hello.txt', myText, (err) => {
  if(err) {
    console.log('ERROR HAPPENED!');
  } else {
    console.log('file hello.txt created!');
  }
  console.log('DONE!');
});
