function rollDice(rollNumber) {
    var result = [];

    for (var i = 0; i < rollNumber; i++) {
     result.push(getRndInteger(1, 6));

    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
      sum += result[i]
      average = sum/result.length;
    }

     console.log('Rolled '+ rollNumber + ' dice: ' + result.join(', '));
     console.log('Total: ' + sum);
     console.log('Average Roll: ' + average);
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  rollDice(process.argv[2]);


  const a = process.argv[2];
  const b = process.argv[3];

  