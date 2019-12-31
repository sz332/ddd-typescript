import { Country } from "./Country";
import { City } from "./City";
import { PoNumber } from "./PoNumber";
import { Name } from "./Name";
import { StreetAddress } from "./StreetAddress";

export class Address {

    private readonly _name: Name;
    private readonly _country: Country;
    private readonly _city: City;
    private readonly _poNumber: PoNumber;
    private readonly _streetAddress: StreetAddress;

    constructor(name: Name, country: Country, city: City, poNumber: PoNumber, streetAddress: StreetAddress) {
        this._name = name;
        this._country = country;
        this._city = city;
        this._poNumber = poNumber;
        this._streetAddress = streetAddress;
    }

}