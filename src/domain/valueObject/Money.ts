import { ValueObject } from "../../core/ValueObject";

interface MoneyProps {
    amount: number,
    currency: string
}

export class Money extends ValueObject<MoneyProps>{

    private constructor(props: MoneyProps) {
        super(props);
    }

    public static create(amount: number, currency: string): Money {

        if (amount < 0) {
            throw new Error("Amount must be positive or zero");
        }

        return new Money({ amount, currency });
    }

    add(money: Money): Money {
        if (money.props.currency !== this.props.currency) {
            throw new Error("Incompatible money type");
        }

        return new Money({
            amount: money.props.amount + this.props.amount,
            currency: money.props.currency
        });
    }

    asString(): String {
        return this.props.amount + " " + this.props.currency;
    }

}