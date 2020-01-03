import { Password } from "../../../src/domain/valueObject/Password";

describe('Password', () => {
    
    it('Password can be created and validated', () => {
        let password = Password.create('testing123')
        expect(password.matches('testing123')).toBe(true);
        expect(password.matches('testing12')).toBe(false);
    });

});