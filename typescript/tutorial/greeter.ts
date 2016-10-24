class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
	this.fullName =	firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function gree(person: string) {
    return "Hello " + person;
}

function greeter(person: Person) {
    return "Hello " + person.firstName;
}

var user = {firstName: 'Jail', lastName: 'Andrade'};
var user2 = new Student('Jail', 'C', 'Andrade');

console.log(gree('Hola'));
console.log(greeter(user));
console.log(greeter(user2));
