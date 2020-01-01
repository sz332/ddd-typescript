import { ValueObject } from "../../core/ValueObject";
import { Length } from "./Length";

interface DimensionProps {
    width: Length,
    height: Length,
    depth: Length
}

export class Dimension extends ValueObject<DimensionProps>{

    private constructor(props: DimensionProps) {
        super(props);
    }

    public static create(width: Length, height: Length, depth: Length): Dimension {
        return new Dimension({ width, height, depth });
    }

    width(): Length {
        return this.props.width;
    }

    height(): Length {
        return this.props.height;
    }

    depth(): Length {
        return this.props.depth;
    }

}