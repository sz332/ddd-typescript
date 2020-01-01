import { Country } from "../valueObject/Country";
import { City } from "../valueObject/City";
import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Name } from "../valueObject/Name";
import { PoNumber } from "../valueObject/PoNumber";
import { StreetAddress } from "../valueObject/StreetAddress";

export interface AddressProps {

    name: Name;
    country: Country;
    city: City;
    poNumber: PoNumber;
    streetAddress: StreetAddress;

}

export class Address extends Entity<AddressProps>{

    private constructor(props: AddressProps, id?: UniqueEntityID){
        super(props, id);
    }

}