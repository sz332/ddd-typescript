export class PoNumber {

    private readonly _value: number;

    constructor(value: number) {

        if (value <= 0) {
            throw new Error("PoNumber must be positive");
        }

        this._value = value;
    }

    value(): number {
        return this._value;
    }

}