import uuid = require("uuid");

export class UUID {

    private readonly _value: string;

    constructor(value?: string) {
        this._value = value ? value : uuid.v4();
    }

    asString(): string {
        return this._value;
    }

}