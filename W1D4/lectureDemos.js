// JS Objects
// Creating an object

const dog = {
    // keys are always strings.
        age: 10, 
        firstName: 'Jujube', 
        lastName: 'Burlybottom',
        toys: [
            'Amazon delivery Box',
            'Pork Leg',
            'Rubber Ducky',
            'Ball'
        ],
        'fur-color': 'brown',
        2: 'number 2',
        //keys that have values of functions are called methods
        
    };
    //use dot notation to call objects
    console.log(dog.age); //10
    console.log(dog["age"]); //10
    console.log(dog.toys[1]); //'Pork leg'
    console.log(dog.toys[2]); //'Rubber Ducky'
    console.log(dog["fur-color"]); //'brown'
    //nmumbers can be called using math
    console.log(dog[1+1]); //'number 2'
    
    // new values can be added to objects
    dog.middleName = 'Pemberton';
    console.log(dog.middleName);
    console.log(dog.toys);
    
    //Object functions
    console.log(Object.keys(dog)); //will print all keys of 'dog'

    console.log(Object.values(dog)); //will print all values of 'dog'

    //how to merge objects
    const mergeObject = Object.assign(dog, {friends: ['fluffy', 'blue'], favFood: 'cheese'});
    console.log(mergeObject);
    //IMPORTANT: using Object.assign will permanently mutate the current object. console.log(dog); will now print values assigned in mergeObject.
    //To avoid mutating original object:
    
    const copyObject = Object.assign({}, dog, {job: 'look good'});
    console.log(copyObject); //will show new key: value pairs added from copyObject.
    console.log(dog); //will NOT include new key: value pairs added from copyObject.
    
    //iterate over objects
    
    //for in loop
    
    for (let key in dog) {
        console.log("key:", key, "value:", dog[key]);
    }
    
    