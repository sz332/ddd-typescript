export class Email {

    private readonly _email: string;

    constructor(email: string){

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false){
            throw new Error("Email address is invalid");
        }

        this._email = email;
    }

    email(): string {
        return this._email;
    }

}