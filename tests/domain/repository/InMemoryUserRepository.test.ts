import { User, UserType } from "../../../src/domain/entity/User";
import { Password } from "../../../src/domain/valueObject/Password";
import { Email } from "../../../src/domain/valueObject/Email";
import { InMemoryUserRepository } from "../../../src/domain/repository/InMemoryUserRepository";

describe('UserRepository', () => {

    it('User can be added to repository and queried back', () => {

        let repository = new InMemoryUserRepository();

        let user = User.create(Email.create('john.doe@mail.com'), Password.create('testing123'), UserType.NORMAL);
        repository.add(user);

        let userId = user.id();

        let storedUserOrError = repository.findBy(userId);

        expect(storedUserOrError.isSuccess).toBeTruthy();

        let storedUser = storedUserOrError.value;

        expect(storedUser.equals(user)).toBeTruthy();
    });

    it('User can be added to repository and removed', () => {

        let repository = new InMemoryUserRepository();

        let user = User.create(Email.create('john.doe@mail.com'), Password.create('testing123'), UserType.NORMAL);
        repository.add(user);

        let userCountBeforeRemove = repository.findAll().length;

        let userId = user.id();

        repository.remove(userId);

        let userCountAfterRemove = repository.findAll().length;

        expect(userCountAfterRemove + 1).toEqual(userCountBeforeRemove);
    });

});