export class StreetAddress {

    readonly _address: string;

    constructor(address: string) {
        this._address = address;
    }

    address(): string {
        return this._address;
    }

}