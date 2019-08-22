const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if(err) {
    console.log("Error reading file");
  } else {
    const lines = data.toString().split('\n');
    for(let n = 0; n < lines.length; n++) {
      console.log(`${n} | ${lines[n]}`);
    }
  }
});