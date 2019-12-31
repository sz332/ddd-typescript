import { Money } from "../../src/domain/Money";

describe('Money', () => {
    
    it("Money of the same currency can be added", () => {
        let money = new Money(25, "USD");
        let money2 = new Money(30, "USD");
        expect(money.add(money2).asString()).toBe("55 USD");
    });

    it("Money of different currency cannot be added", () => {
        let money = new Money(25, "USD");
        let money2 = new Money(500, "HUF");
        expect( () => money.add(money2)).toThrowError();
    });

    it('asString() returns 25 USD', () => {
        let money = new Money(25, "USD");
        expect(money.asString()).toBe("25 USD");
    });


});