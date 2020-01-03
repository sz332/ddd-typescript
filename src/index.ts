import { InMemoryUserRepository } from "./domain/repository/InMemoryUserRepository";
import { User, UserType } from "./domain/entity/User";
import { Email } from "./domain/valueObject/Email";
import { Password } from "./domain/valueObject/Password";

console.log("Starting debugging here");

let user = User.create(Email.create('john.doe@mail.com'), Password.create('testing123'), UserType.NORMAL);

console.log(user);

let repository = new InMemoryUserRepository();
repository.add(user);

let userId = user.id();

let storedUserOrError = repository.findBy(userId);

let storedUser = storedUserOrError.value;

console.log(storedUser);

if (storedUser){
    let matching = storedUser.equals(user);

    console.log(matching);
}

