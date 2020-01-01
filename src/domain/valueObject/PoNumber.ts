import { ValueObject } from "../../core/ValueObject";

interface PoNumberProps {
    value: number
}

export class PoNumber extends ValueObject<PoNumberProps>{

    private constructor(props: PoNumberProps) {
        super(props);
    }

    public static create(value: number): PoNumber {

        if (value <= 0) {
            throw new Error("Value must be positive");
        }

        return new PoNumber({ value });
    }

    value(): number {
        return this.props.value;
    }

}
