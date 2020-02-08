import { User, UserType } from "../../../src/domain/entity/User";
import { Password } from "../../../src/domain/valueObject/Password";
import { Email } from "../../../src/domain/valueObject/Email";

describe('User', () => {

    it('User can be created with valid email and password', () => {
        let user = User.create(Email.create('john.doe@mail.com'), Password.create('testing123'), UserType.NORMAL);
        //expect(user.email().matches('john.doe@mail.com')).toBe(true);
    });

});