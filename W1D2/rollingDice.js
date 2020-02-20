// function rollDice(rollNumber, diceSides) {
const args = process.argv.slice(2);
rollNumber = args[0];
diceSides = args[1];

    var result = [];
    for (var i = 0; i < rollNumber; i++) {
     result.push(getRndInteger(1, diceSides));
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
      sum += result[i]
      average = sum/result.length;
    }
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }
     console.log('Rolled '+ rollNumber + ' dice: ' + result.join(', '));
     console.log('Total: ' + sum);
     console.log('Average Roll: ' + average.toFixed(3));
  
  // function getRndInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min) ) + min;
  // }
  // rollDice(process.argv[2]);

  