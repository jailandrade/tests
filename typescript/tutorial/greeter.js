var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function gree(person) {
    return "Hello " + person;
}
function greeter(person) {
    return "Hello " + person.firstName;
}
var user = { firstName: 'Jail', lastName: 'Andrade' };
var user2 = new Student('Jail', 'C', 'Andrade');
console.log(gree('Hola'));
console.log(greeter(user));
console.log(greeter(user2));
