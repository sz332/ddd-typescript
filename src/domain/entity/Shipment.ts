import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";
import { Address } from "../valueObject/Address";
import { Parcel } from "./Parcel";
import { Money } from "../valueObject/Money";
import { PricedParcel } from "../valueObject/PricedParcel";
import { User } from "./User";

interface ShipmentProps {
    sender: User,
    pickupAddress: Address,
    deliveryAddress: Address,
    pricedParcel: PricedParcel
}

// for ideas
// https://developer.bring.com/api/shipping-guide_2/
export class Shipment extends Entity<ShipmentProps>{

    private constructor(props: ShipmentProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(sender: User, pickupAddress: Address, deliveryAddress: Address, pricedParcel: PricedParcel): Shipment {
        return new Shipment({ sender, pickupAddress, deliveryAddress, pricedParcel });
    }

    public changeDeliveryAddress(newAddress : Address){
        // FIXME can the user change the delivery address completely, or only partially
        this.props.deliveryAddress = newAddress;
        // send notification event
    }

}