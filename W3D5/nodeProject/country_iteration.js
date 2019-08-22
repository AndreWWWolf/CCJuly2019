const countries = require("./countries");

for(let name of countries) {
  console.log(`${name} has ${name.length} characters`);
}