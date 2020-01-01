import { Email } from "../../../src/domain/valueObject/Email";

describe('Email', () => {
    
    it('Email can be created with valid address', () => {
        let email = Email.create('john.doe@mail.com')
        expect(email.value()).toBe('john.doe@mail.com');
    });

});