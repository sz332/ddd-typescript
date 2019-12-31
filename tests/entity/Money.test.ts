import { Money } from "../../src/entity/Money";

describe('Money printout', function () {
    it('printout', function () {
        let money = new Money(25, "USD");
        expect(money.toString()).toBe("25 USD");
    })
    }
);