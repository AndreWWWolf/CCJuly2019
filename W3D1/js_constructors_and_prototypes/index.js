const doggo = {
    name: 'Gabe',
    age: 38,
    bark: function() {
        console.log('Bork');
    },
    sleep: function() {
        console.log('Zzzzzzz');
    },
    sleep2() {
        console.log('Xzzzzz');
    },
    speak() {
        console.log(this);
    }
}

doggo.bark(); //'Bork'
doggo.sleep(); //'Zzzzzzz'
doggo.sleep2(); //'Xzzzzzz'
doggo.speak(); //{ name: 'Gabe',
                // age: 38,
                // bark: [Function: bark],
                // sleep: [Function: sleep],
                // sleep2: [Function: sleep2],
                // speak: [Function: speak] }
