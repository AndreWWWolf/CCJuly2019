// // Demo: Constructed Counter
// // should have a step property
// // should have a count property
// // should have a increment method
// // should have a decrement method
// // should have a now method
// function counter(count = 0, step = 1) {
//     if (typeof count !== 'number') {
//         throw new Error('first arg must be a number')
//     }
//     this.count = count;
//     this.step = step;
    
//     this.inc = function() {
//         this.count += this.step;
//         return this;
//       }
    
//       this.dec = function() {
//         this.count -= this.step;
//         return this;
//       }
    
//       this.now = function() {
//         return this.count;
//       }
// }


// V2
// class Counter {
//     constructor(count = 0, step = 0) {
//         if (typeof count !== 'number') {
//             throw new Error('count must be a number!!')
//         }
//         this.count = count;
//         this.step = step;
//     }
//     inc() {
//         this.count += this.step;
//         return this;
//     }
//     dec() {
//         this.count -= this.step;
//         return this;
//     }
//     now() {
//         return this.count;
//     }
//     setStep(newStep) {
//         this.step = newStep;
//         return this;
//     }
// }
// const a = new Counter();

// CLASS VERSION
const counter = {
    count: 0,
    tick: 1,
    inc() {
      // this refers to the counter object so we have access to all
      // of the properties of the object
      this.count += this.tick;
      // this.count++;
      // this.count = this.count + 1;
      return this;
    },
    setTick(t) {
      this.tick = t;
      return this;
    },
    dec() {
      this.count -= this.tick;
      return this;
    },
    now() {
      return this.count;
    },
  };
  console.log(counter.inc().inc().inc().now());
  console.log(counter.inc().now());
  console.log(counter.dec().dec().now());
  console.log(counter.count);
  console.log(counter.setTick(2));
  console.log(counter.inc().inc().now());
  console.log(counter.dec().now());
  console.log(counter.setTick(1));