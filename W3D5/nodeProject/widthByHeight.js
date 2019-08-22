const fs = require('fs');

const width = process.argv[2];
const height = process.argv[3];

const fileName = `${width}_by_${height}`;
let myText = ``;
const line = "*".repeat(width) + '\n';

for(let n = 1; n <= height; n++) {
  myText += line;
}

fs.writeFile(fileName, myText, (err) => {
  if(err) {
    console.log('Error happened');
  } else {
    console.log(`File ${fileName} created`);
  }
});