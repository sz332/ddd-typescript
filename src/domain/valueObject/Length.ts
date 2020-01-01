import { ValueObject } from "../../core/ValueObject";

export enum LengthUnit {
    METER,
    CENTIMETER
}

interface LengthProps {
    value: number,
    unit: LengthUnit
}

export class Length extends ValueObject<LengthProps>{

    private constructor(props: LengthProps) {
        super(props);
    }

    public static create(value: number, unit: LengthUnit): Length {
        return new Length({ value, unit });
    }

    public add(length: Length): Length {
        let oldValueInNewUnit = this.getValueAsUnit(length.props.unit);
        return new Length({ value: oldValueInNewUnit + length.props.value, unit: length.props.unit });
    }

    public getValueAsUnit(unit: LengthUnit): number {
        switch (unit) {

            case LengthUnit.CENTIMETER:
                return this.props.unit === LengthUnit.CENTIMETER ? this.props.value : this.props.value * 100;

            case LengthUnit.METER:
                return this.props.unit === LengthUnit.METER ? this.props.value : Math.round(this.props.value / 100);

            default:
                return this.props.value;
        }
    }


}