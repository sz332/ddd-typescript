import { ValueObject } from "../../core/ValueObject";

interface WeightProps {
    weight: number
}

export class Weight extends ValueObject<WeightProps>{

    private constructor(props: WeightProps) {
        super(props);
    }

    public static create(weight: number): Weight {
        return new Weight({ weight });
    }

    weight(): number {
        return this.props.weight;
    }

}