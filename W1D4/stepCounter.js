const counter = {
    count: 0,
    step: 1,
    set: function(newStep) {
        this.step = newStep;
    },
    inc: function() {
      this.count += this.step;
      return this.count;
    },
    dec: function() {
        this.count -= this.step;
        return this.count;
    },
    now: function() {
      return this.count;
    }
  }

  //OPTION 2
//   const counter = {
//     count: 0,
//     step: 1,
//     
//      set(n) {
//       this.count = n;
//       // as if I did: counter.count = n;
//       // because `set` is owned by the `counter` object
//     },
//     inc() {
//       this.count += this.step;
//     },
//     dec() {
//       this.count -= this.step;
//     },
//     now() {
//       return this.count;
//     },
//     setStep(newStep) {
//       this.step = newStep;
//     }
//   }
  
  console.log(counter.inc()); // 1
  counterCopy.set(2);
  console.log(counter.inc()); // 3
  console.log(counter.inc()); // 5
  console.log(counter.now()); // 5
  console.log(counter.dec()); // 3
  counterCopy.set(1);
  console.log(counter.dec()); // 2
  console.log(counter.dec()); // 1