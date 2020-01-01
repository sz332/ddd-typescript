import { Dimension } from "../valueObject/Dimension";
import { Weight } from "../valueObject/Weight";
import { Entity } from "../../core/Entity";
import { UniqueEntityID } from "../../core/UniqueEntityID";

interface ParcelProps {
    dimension: Dimension,
    weigth?: Weight
}

export class Parcel extends Entity<ParcelProps>{

    private constructor(props: ParcelProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(dimension: Dimension, weigth?: Weight): Parcel {
        return new Parcel({ dimension, weigth });
    }

}