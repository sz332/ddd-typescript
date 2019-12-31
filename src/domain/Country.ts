export class Country {

    private readonly _code: string;

    constructor(code: string) {
        this._code = code;
    }

    code(): string {
        return this._code;
    }

}