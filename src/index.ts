import {Money} from "./domain/valueObject/Money";

interface Person {
    firstName: String,
    lastName: String
}

function greeter(person: Person) {
    console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

let john = { firstName: "John", lastName: "Doe" }

greeter(john);

let money = Money.create(30, "USD");

console.log(money.toString());

