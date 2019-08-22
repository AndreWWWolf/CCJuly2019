const number = parseInt(process.argv[2]);

if(number > 10) {
  console.log('Large');
} else {
  console.log('Small');
}

(number > 10) ? console.log('Large') : console.log('Small');