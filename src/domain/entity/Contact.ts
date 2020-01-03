import { Email } from "../valueObject/Email";
import { Address } from "../valueObject/Address";
import uuid = require("uuid");
import { PhoneNumber } from "../valueObject/PhoneNumber";
import { Entity } from "../../core/Entity";

interface ContactProps {
    email: Email;
    phoneNumber: PhoneNumber;
    defaultAddress: Address;
}

export class Contact extends Entity<ContactProps>{

    //addresses: Array<Address>;
    // constructor(email: Email, phoneNumber: PhoneNumber, _defaultAddress: Address) {
    //     this._email = email;
    //     this._phoneNumber = phoneNumber;
    //     this._addresses = new Array<Address>();
    //     this._addresses.push(_defaultAddress);
    //     this._defaultAddress = _defaultAddress;
    // } 


}