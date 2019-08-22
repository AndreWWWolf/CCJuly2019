// defining a constructor function
// by convention constructor function names are capitalized
// it's calle PascalCase
function Doggo(name, age) {
    // when calling this constructor function with the new keyword
    // this becomes an empty object. We can add properties to this
    // object by using dot notation or square bracket notation;
    // this = {};
    this.name = name;
    this.age = age;
    // this.bark = function() {
    //   console.log('Bork!');
    // }
  
    // creates a sleep function on every instance.
    // if we have 100 instances of Doggo then we have
    // 100 of these functions sitting in memory somewhere. NOT good.
    this.sleep = function() {
      console.log('ZZZZzzzzzz!');
    }
    return 'called using parenthesis'
  }
  // Adds the bark method to the prototype of Doggo
  // All instances of the Doggo constructor now have a reference
  // to this bark method through the prototype chain
  Doggo.prototype.bark = function() {
    console.log('Bork!');
  }
  
  const jeff = new Doggo('Jeff', 9);
  const stella = new Doggo('Stella', 21);
  // console.log(Doggo());