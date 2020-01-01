import { Email } from "../valueObject/Email";
import { Address } from "./Address";
import uuid = require("uuid");
import { PhoneNumber } from "../valueObject/PhoneNumber";

export class Contact {

    _email: Email;
    _phoneNumber: PhoneNumber;
    _addresses: Array<Address>;
    _defaultAddress: Address;

    constructor(email: Email, phoneNumber: PhoneNumber, _defaultAddress: Address) {
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._addresses = new Array<Address>();
        this._addresses.push(_defaultAddress);
        this._defaultAddress = _defaultAddress;
    }


}