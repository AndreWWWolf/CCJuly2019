// function Student(id, firstName, lastName, age, country) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
// }

// function logStudent(Student) {
//     console.log(`${this.id}: ${this.firstName} ${this.lastName} is ${this.age} years old from ${this.country}`);
// }
// const andrew = new Student(1, 'Andrew', 'Wolf', 28, 'Canada');

// console.log(andrew.logStudent());

class Student {
    constructor(id, firstName, lastName, age, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    };
    
    logStudent() {
        console.log(`${this.id}: ${this.firstName} ${this.lastName} is ${this.age} years old from ${this.country}`);
    }
}
const student1 = new Student('hijk123', 'Andrew', 'Wolf', 28, 'Canada');
const student2 = new Student('abc123', 'cristina', 'de Souza', 'Brazil');

console.log(student1.logStudent());
console.log(student2.logStudent());
