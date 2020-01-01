import { Country } from "./Country";
import { City } from "./City";
import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Name } from "./Name";
import { PoNumber } from "./PoNumber";
import { StreetAddress } from "./StreetAddress";
import { ValueObject } from "../../core/ValueObject";

export interface AddressProps {

    name: Name;
    country: Country;
    city: City;
    poNumber: PoNumber;
    streetAddress: StreetAddress;

}

export class Address extends ValueObject<AddressProps>{

    private constructor(props: AddressProps) {
        super(props);
    }

    public static create(name: Name, country: Country, city: City, poNumber: PoNumber, streetAddress: StreetAddress): Address {
        return new Address({ name, country, city, poNumber, streetAddress });
    }

}