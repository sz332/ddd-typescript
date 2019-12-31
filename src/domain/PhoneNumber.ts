export class PhoneNumber {

    readonly _number: string;

    constructor(number: string) {

        if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(number) == false) {
            throw new Error("Invalid phone number");
        }

        this._number = number;
    }

    number(): string {
        return this._number;
    }

}