// MERGING OBJECTS

// USING OBJECT.ASSIGN (EASIEST WAY):

// let objA = {a: 1, b: 2}
// let objB = {c: 3, d:4}
// let objC = Object.assign(objA, objB);

// console.log(objC);

// WITHOUT OBJECT.ASSIGN:

function merge(objA, objB) {
    const mergeObj = {};
    for (let key in objA) {
      mergeObj[key] = objA[key];
    }
    for (let key in objB) {
      mergeObj[key] = objB[key];
    }
    return mergeObj;
  }

  const objA = {
      name: 'Andrew', 
      message: 'Food is Good',
      birthplace: 'Calgary'
  }
  const objB = {
      name: 'Shannon',
      message: 'Sand is brown'
      
  }
//   if objA and objB have matching key: value variable names, 
//   as below, objB will overwrite objA when console.logged:
    
  console.log(merge(objA, objB));