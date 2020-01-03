import { User, UserType } from "../../../src/domain/entity/User";
import { Password } from "../../../src/domain/valueObject/Password";
import { Email } from "../../../src/domain/valueObject/Email";
import { InMemoryUserRepository } from "../../../src/domain/repository/InMemoryUserRepository";
import { UniqueEntityID } from "../../../src/core/UniqueEntityID";

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
    it('Repository with unknown id will return a failed result', () => {

        let repository = new InMemoryUserRepository();
        let storedUserOrError = repository.findBy(new UniqueEntityID('12345'));

        expect(storedUserOrError.isFailed).toBeTruthy();
    });

});