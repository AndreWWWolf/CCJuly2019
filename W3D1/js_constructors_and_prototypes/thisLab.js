// When `this` is by itself it references the global object
// console.log(this);

// when `this` is refered to inside of a function
// its value is the global object
function whatIsThis() {
    console.log(this);
  }
  
  const can = {
    touchThis: function() {
      // when `this` is within a method it references the object
      console.log(this);
    },
    cantTouchThis: function() {
      function a() {
      // the this referenced here is the global object
      // because the a function does not belong to the can object
      // its just a function.
        console.log(this);
      }
      a();
    }
  }
  