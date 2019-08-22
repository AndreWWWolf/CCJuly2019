// // //Modelling Data and Behaviour with Constructors
// // COHORT 33 VERSION
// function Doggo(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   // sleep method for Doggos
//   Doggo.prototype.sleep = function() {
//     console.log('zzzzz')
//   }
//   // bark  method for Doggos
//   Doggo.prototype.bark = function() {
//     console.log('BORK!')
//   }
  
//   Doggo.prototype.sit = function() {
//     console.log('sit from Doggo')
//   }
  
//   function DoggoFighter(name, age, specialPower) {
//     this.name = name;
//     this.age = age;
//     this.specialPower = specialPower;
//   }
  
//   DoggoFighter.prototype.useSpecial = function() {
//     console.log(`${this.name} used ${this.specialPower}! It was very effective!`)
//   }
  
//   DoggoFighter.prototype.sit = function() {
//     console.log('cant sit still')
//   }
//   // set sets the DoggoFighter prototype's prototype to Doggo's prototype
//   Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype)
//   // Now any instance of DoggoFighter has all the attributes and methods
//   // of a Doggo instance.
  
//   const normie = new Doggo('norman', 1);
//   const darrel = new DoggoFighter('Darrel', 50, 'Drill');

//   USING CLASSES AS CONSTRUCTORS
class Doggo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        return `${this.name} bark 'Bark Bark Bark!'`;
    }
    fetch(thing) {
        return `${this.name} retrieved ${thing}`;
    }
}

class DoggoFighter extends Doggo {
    constructor(name, age, specialPower) {
        super(name,age);
        // super() calls the constructor function of its parent class, 
        // in this case Doggo, so super(name, age) can replace the two lines below:
        // this.name = name;
        // this.age = age;
        this.specialPower = specialPower;
    }
    useSpecial() {
        console.log(`${this.name} used ${this.specialPower}! It was very effective!`);
      }
    fight(dog) {
        const winner = [this.name, dog.name][Math.floor(Math.random() * 2)];
        return `${winner} won!`
    }
}

const clifford = new Doggo('clifford', 5);
const drillBitDarel = new DoggoFighter("Drill Bit Darel", 7, "Drill!");

// COHORT 32 VERSION
// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
//     // when we create a new instance of a constructor using the `new` 
//     // keyword we are creating a new empty object and assigning key:value pairs to it
//     // the following is a visualization of what this 
//     // constructor function does under the hood
//     // {}
//     // {}.name = name;
//     // {}.age = age;
//     // return {name,age}
//     return 'called as a function'
// }

// Dog.prototype.bark = function() {
//     return `${this.name} barks 'Bark Bark Bark!'`
// }
// Dog.prototype.fetch = function(thing) {
//     return `${this.name} retrieved a ${thing}`
// }
// function DogFighter(name, age, specialAbility) {
//     this.name = name;
//     this.age = age;
//     this.specialAbility = specialAbility;
// }
// DogFighter.prototype.fight = function(dog) {
//     const winner = [this.name, dog.name][Math.floor(Math.random()) * 2];
//     return `${winner} has won!`
// }

// function Animal() {

// }
// Animal.prototype.eat = function(food) {
//     return `${this.name} ate a lot of ${food}`;
// }
// Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

const NormalNorman = new Doggo('Norman', 5);
const DrillBitDarel = new DoggoFighter('DrillBit Darel', 1, 'Drill!');
const LumberjackLawrence = new DoggoFighter('LumberjackLawrence', 2, 'chainsaw chop!');
