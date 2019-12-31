export class Money {

    readonly amount: number;
    readonly currency: string;

    constructor(amount: number, currency: string) {

        if (amount < 0) {
            throw new Error("Amount must be zero or positive");
        }

        this.amount = amount;
        this.currency = currency;
    }

    add(money: Money): Money {
        if (money.currency !== this.currency) {
            throw new Error("Incompatible money type");
        }

        return new Money(money.amount + this.amount, money.currency);
    }

    asString(): String {
        return this.amount + " " + this.currency;
    }

}