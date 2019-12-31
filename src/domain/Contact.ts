import { Email } from "./Email";
import { PhoneNumber } from "./PhoneNumber";
import { Address } from "./Address";
import { UUID } from "./UUID";
import uuid = require("uuid");

export class Contact {

    _id: UUID;
    _email: Email;
    _phoneNumber: PhoneNumber;
    _addresses: Array<Address>;
    _defaultAddress: Address;

    constructor(id: UUID, email: Email, phoneNumber: PhoneNumber, _defaultAddress: Address) {
        this._id = id;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._addresses = new Array<Address>();
        this._addresses.push(_defaultAddress);
        this._defaultAddress = _defaultAddress;
    }


}