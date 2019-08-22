const number = parseInt(process.argv[2]);

if(number > 1000) {
  console.log('Large number');
} else if(number > 100) {
  console.log('Medium number');
} else if(number > 10) {
  console.log('Small number');
} else {
  console.log('Extra small number');
}