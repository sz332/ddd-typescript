import { Money } from "../../../src/domain/valueObject/Money";

describe('Money', () => {
    
    it("Money of the same currency can be added", () => {
        let money = Money.create(25, "USD");
        let money2 = Money.create(30, "USD");
        expect(money.add(money2).asString()).toBe("55 USD");
    });

    it("Money of different currency cannot be added", () => {
        let money = Money.create(25, "USD");
        let money2 = Money.create(500, "HUF");
        expect( () => money.add(money2)).toThrowError();
    });

    it('asString() returns 25 USD', () => {
        let money = Money.create(25, "USD");
        expect(money.asString()).toBe("25 USD");
    });


});