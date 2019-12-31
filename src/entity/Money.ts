export class Money {

    private readonly amount: Number;
    private readonly currency: String;

    constructor(amount: Number, currency: String) {

        if (!currency) {
            throw new Error("Currency must be provided");
        }

        if (amount < 0) {
            throw new Error("Amount must be zero or positive");
        }

        this.amount = amount;
        this.currency = currency;
    }

    toString(): String {
        return this.amount + " " + this.currency;
    }

}